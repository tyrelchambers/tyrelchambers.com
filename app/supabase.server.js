import { createClient } from "@supabase/supabase-js";
import { createSessionStorage } from "remix";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

function createDatabaseSessionStorage({ cookie }) {
  // Configure your database client...
  const db = supabase.from("sessions");

  return createSessionStorage({
    cookie,
    async createData(data, expires) {
      // `expires` is a Date after which the data should be considered
      // invalid. You could use it to invalidate the data somehow or
      // automatically purge this record from your database.
      const { data: test } = await db.insert(data);

      return test;
    },
    async readData(data) {
      const { body } = await db
        .select()
        .eq("access_token", data[0].access_token);
      console.log(body);
      const cookie = body.legnth > 0 ? body[body.length - 1] : null;
      return cookie;
    },
    async updateData(id, data, expires) {
      await db.update(id, data);
    },
    async deleteData(data) {
      await db.delete().eq("id", data[0].id);
    },
  });
}

const { getSession, commitSession, destroySession } =
  createDatabaseSessionStorage({
    cookie: {
      name: "__session",
      sameSite: "lax",
      secrets: ["JOUUG97gyviF*^F"],
    },
  });

export const setAuthToken = async (request) => {
  let session = await getSession(request.headers.get("Cookie"));

  supabase.auth.setAuth(session.get("access_token"));

  return session;
};

export { getSession, commitSession, destroySession };

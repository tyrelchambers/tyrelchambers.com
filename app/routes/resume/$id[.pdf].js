import { Response } from "@remix-run/node";
import { getPDF } from "../../server.server";

export const action = async ({ request }) => {
  const file = await getPDF();
  const fileStream = fs.createWriteStream(file);

  return new Response(fileStream, {
    headers: {
      "Content-Type": "application/pdf",
    },
    status: 200,
  });
};

export const loader = () => null;

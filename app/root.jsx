import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { SupabaseProvider } from "./utils/supabase-client";
import { createClient } from "@supabase/supabase-js";
import editorcss from "../styles/editor.css";
import globalStyles from "../styles/global.css";
import styles from "./tailwind.css";
import { getUserId } from "./session.server";

export async function loader({ request }) {
  return {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    user: (await getUserId(request)) === process.env.USER_KEY,
  };
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: editorcss },
  ];
}

export function meta() {
  return { title: "Tyrel Chambers" };
}

export default function App() {
  const data = useLoaderData();
  const supabase = createClient(data.SUPABASE_URL, data.SUPABASE_KEY);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body">
        <SupabaseProvider supabase={supabase}>
          <Outlet />
          <ScrollRestoration />

          <script
            defer
            data-domain="tyrelchambers.com"
            src="https://plausible.io/js/plausible.js"
          />
          <script
            src="https://kit.fontawesome.com/5f8ee45a20.js"
            crossOrigin="anonymous"
            defer
          />
          <Scripts />
          <LiveReload />
        </SupabaseProvider>
      </body>
    </html>
  );
}

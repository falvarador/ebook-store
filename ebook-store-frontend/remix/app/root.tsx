import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Layout from "./routes/layout";

export const links: Function = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@picocss/pico@latest/css/pico.min.css",
      preloaded: "true",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ebook Store",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

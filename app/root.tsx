import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";

import { useState, useEffect } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Loader from "./components/Loader";
import stylesLoader from "~/styles/loader.css";
import stylesURL from "~/styles/loader.css";

export const links: LinksFunction = () => [
  {rel: "preconnect", href: "https://fonts.googleapis.com"},
  {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
  {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap"},
  { rel: "stylesheet", href: stylesLoader },
  { rel: "stylesheet", href: stylesURL },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 2000);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {loading ? <Loader /> : (
          <>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </>
        )}
      </body>
    </html>
  );
}

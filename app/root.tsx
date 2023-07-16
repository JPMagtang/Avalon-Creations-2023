import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
// Styles
import stylesUrl from "~/styles/global.css";
import stylesLoader from "~/styles/loader.css";
import stylesCursor from "~/styles/cursor.css";
// Components
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap" },
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: stylesLoader },
  { rel: "stylesheet", href: stylesCursor },
  // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  // const matches = useMatches();
  // const includeScripts = matches.some(
  //   (match) => match.handle?.hydrate
  // );

  // INITIAL PAGE LOADING EFFECT
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // CURSOR EFFECT
  // Not working. To figure out
  // const [cursorPosition, setCursorPosition] = useState({
  //   x: 0,
  //   y: 0
  // })
  // const [cursorVariant, setCursorVariant] = useState("default");
  // console.log(cursorPosition);

  // useEffect(() => {
  //   const cursorMove = (e:any) => {
  //     console.log(e); 
  //     setCursorPosition({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }
  //   window.addEventListener("cursorMove", cursorMove);

  //   return () => {
  //     window.removeEventListener("cursorMove", cursorMove);
  //   }

  // }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
          {/* <Cursor /> Not working. To figure out */}
          {loading ? <Loader /> : <Outlet />}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
      </body>
    </html>
  );
}

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
import loaderStyle from "~/styles/loader.css";
// Components
import Loader from "./components/Loader";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: loaderStyle }
];

export default function App() {
  // INITIAL PAGE LOADING EFFECT
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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

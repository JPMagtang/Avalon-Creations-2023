import type { LinksFunction } from "@remix-run/node";
import { useState, useEffect, useRef } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

// Components
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import AnimatedOutlet from "./components/AnimatedOutlet";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
// Styles
import globalStyle from "~/styles/global.css";
import loaderStyle from "~/styles/loader.css";
import transitionStyle from "~/styles/transition.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyle },
  { rel: "stylesheet", href: loaderStyle },
  { rel: "stylesheet", href: transitionStyle }
];

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  // Initial page loading effect.
  const location = useLocation()
  const nodeRef = useRef(null)

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <Document>
    {isLoading ? <Loader /> : (<Layout>
      <SwitchTransition>
        {/* Make this transition a glitch effect. */}
        <CSSTransition
          key={location.pathname}
          timeout={300}
          nodeRef={nodeRef}
          classNames="fade"
        >
          <div ref={nodeRef} className="transition-all">
            <AnimatedOutlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </Layout>)}
  </Document>
  );
}

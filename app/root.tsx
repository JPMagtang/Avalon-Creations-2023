import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { useState, useEffect, useRef } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

// Assets
import faviconAssetURL from "./assets/images/favicon.ico"

// Components
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import AnimatedOutlet from "./components/AnimatedOutlet";
import { SwitchTransition, CSSTransition } from 'react-transition-group';

// Styles
import glitchStyle from "~/styles/glitch.css";
import globalStyle from "~/styles/global.css";
import loaderStyle from "~/styles/loader.css";
import transitionStyle from "~/styles/transition.css"

export const links: LinksFunction = () => [
  { rel: "icon", href: `${faviconAssetURL}`, type: "image/ico"},
  { rel: "stylesheet", href: globalStyle },
  { rel: "stylesheet", href: loaderStyle },
  { rel: "stylesheet", href: transitionStyle },
  { rel: "stylesheet", href: glitchStyle }
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Avalon Creations" },
    { name: "description", content: "Welcome to Avalon!" },
  ];
};

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
  const location = useLocation()
  const nodeRef = useRef(null)

  // Initial page loading effect.
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
  setLoading(true);
  setTimeout(() => {
      setLoading(false);
      }, 2500);
  }, []);

  if (isLoading) {
    return (
      <Document>
        <Loader />
      </Document>
    )
  } else {
    return (
      <Document>
        <Layout>
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
        </Layout>
      </Document>
    );
  }
}


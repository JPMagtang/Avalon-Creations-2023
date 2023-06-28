import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import stylesUrl from "~/styles/index.css";
import Projects from "~/components/Projects";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container">

      <nav>
        <h2 className="avalon-logo">AVALON</h2><p className="avalon-creator">JP Magtang</p>
      </nav>

      <div className="main">
        <p>A REALM FOR DIGITAL</p>
        <h1 className="main-header">CREATIONS</h1>
        <ul>
          <li>Architecture</li>
          <li>UX|UI Design</li>
          <li>Software Development</li>
        </ul>
      </div>
      <div className="main-projects">
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </div>

      <div className="footer">
        <ul>
          <li>Creations</li>
          <li>About</li>
          <li>Connect</li>
        </ul>
      </div>

    </div>
  );
}

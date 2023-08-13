import type { LinksFunction } from "@remix-run/node";
import globalStyle from "~/styles/global.css";
import glitchStyle from "~/styles/glitch.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyle },
  { rel: "stylesheet", href: glitchStyle }
];

export default function About() {
  return (
    <div className="main">
      <div className="main-content">
        <p>Welcome to</p>
        <h1 className="hero glitch layers" data-text="BLOGS"><span>BLOGS</span></h1>
        <p>There's not much here right now. But, I plan to fill this space with my discoveries and learnings in Software Engineering along the way.
          <br />So, stay tuned!
        </p>
      </div>
    </div>
  );
}
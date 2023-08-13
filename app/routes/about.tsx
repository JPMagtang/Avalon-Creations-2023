import type { LinksFunction } from "@remix-run/node";
import globalStyle from "~/styles/global.css";
import glitchStyle from "~/styles/glitch.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyle },
  { rel: "stylesheet", href: glitchStyle }
];

export default function About() {
  return (
    <div className="main">
      <div className="main-content">
        <p>Greetings! I’m</p>
        <h1 className="hero glitch layers" data-text="JP MAGTANG"><span>JP MAGTANG</span></h1>
        <p>I created Avalon as a space for my digital creations. You can see here the choice pick of my works in architecture, UX/UI design, and software development.
          <br /><br />I am originally from the field of design, but the winds led me to software development which I’m equally, if not more, passionate about.
          <br /><br />I greatly appreciate your visit here and please feel free to reach out.</p>
      </div>
    </div>
  );
}
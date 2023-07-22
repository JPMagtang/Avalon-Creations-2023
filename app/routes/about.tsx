import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
  ];
  

export default function About() {
    return (
      <div className="container">
        <Header />
        <div className="main">
          <div className="main-content">
            <p>Greetings! I’m</p>
            <h1 className="main-header">JP MAGTANG</h1>
            <p>I created Avalon as a space for my digital creations. You can see here the choice pick of my works in architecture, UX/UI design, and software development.
            <br /><br />I am originally from the field of design, but the winds led me to software development which I’m equally, if not more, passionate about.
            <br /><br />I greatly appreciate your visit here and please feel free to reach out.</p>
          </div>
        </div>
        <Footer />
        <div className="circular-backing"></div>
      </div>
    );
  }
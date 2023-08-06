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
            <p>Welcome to</p>
            <h1 className="main-header">BLOGS</h1>
            <p>There's not much here right now. But, I plan to fill this space with my discoveries and learnings in Software Engineering along the way.
                <br />So, stay tuned!
            </p>
          </div>
        </div>
        <Footer />
        <div className="circular-backing"></div>
      </div>
    );
  }
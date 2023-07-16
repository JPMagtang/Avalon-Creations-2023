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
            <p>Curious about something?</p>
            <h1 className="main-header">CONNECT</h1>
          </div>
          <form>
            <fieldset>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="traveler@world.com" />
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" placeholder="Your Subject" />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Let me know your thoughts..." />
            </fieldset>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
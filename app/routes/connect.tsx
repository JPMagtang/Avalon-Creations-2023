import type { LinksFunction } from "@remix-run/node";
import globalStyle from "~/styles/global.css";
import glitchStyle from "~/styles/glitch.css"

import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: globalStyle },
    { rel: "stylesheet", href: glitchStyle }
  ];

export default function About() {
    return (
      <div className="container">
        <Header />
        <div className="main">
          <div className="main-content">
            <p>Curious about something?</p>
            <h1 className="hero glitch layers" data-text="CONNECT"><span>CONNECT</span></h1>
            <ul>
              <li><a href="https://github.com/JPMagtang" target="_blank">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/jp-magtang-166785149/" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
          <div className="main-connect">
            <form className="contact-form" action="https://formsubmit.co/319f7a92af306921edfb5ceab9b8e355" method="POST">
                {/* HONEYPOT */}
                {/* <input type="text" name="_honey" className="hidden" /> */}
                {/* CAPTCHA DISABLE */}
                {/* <input type="hidden" name="_captcha" value="false" /> */}
                {/* TO SUCCESS PAGE */}
                {/* <input type="hidden" name="success" value="linkToSuccessPage" /> */}
                <label htmlFor="Name">Name:</label>
                <input type="text" id="name" name="Name" placeholder="Traveler" required />
                <label htmlFor="Email">Email:</label>
                <input type="email" id="email" name="Email" placeholder="traveler@world.com" required />
                <label htmlFor="Subject">Subject:</label>
                <input type="text" id="subject" name="Subject" placeholder="Your Subject" required />
                <label htmlFor="Message">Message:</label>
                <textarea id="message" name="Message" placeholder="Let me know your thoughts..." required />
                <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <Footer />
        <div className="circular-backing"></div>
      </div>
    );
  }
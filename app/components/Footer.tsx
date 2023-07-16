import { Link } from "@remix-run/react";
import Fade from "./Fade";

export default function Footer() {

    // const isPending =
    // fade.state === "loading" &&
    // fade.location.pathname === ;

    return (
        <div className="footer">
            <ul>
                <li><Link id="creations-link" to="/">Creations</Link></li>
                <li><Link id="about-link" to="/about" >About</Link></li>
                <li><Link id="connect-link" to="/connect">Connect</Link></li>
            </ul>
        </div>
    )
}


import { Link } from "@remix-run/react";

export default function Footer() {
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


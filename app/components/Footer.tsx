import { Link } from "@remix-run/react";

export default function Footer() {
    return (
        <div className="footer">
            <ul>
            <li><Link to="/">Creations</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/connect">Connect</Link></li>
            </ul>
        </div>
    )
}
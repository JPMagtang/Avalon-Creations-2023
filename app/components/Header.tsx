import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <nav>
            <h3 className="avalon-logo">
                <Link to="/">AVALON</Link>
            </h3>
            <p className="avalon-creator">
                <Link to="/about">JP Magtang</Link>
            </p>
        </nav>
    )
}
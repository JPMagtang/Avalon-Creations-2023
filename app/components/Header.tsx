import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <nav>
            <h3 className="avalon-logo">AVALON</h3><p className="avalon-creator">
            <Link to="/about">JP Magtang</Link></p>
        </nav>
    )
}
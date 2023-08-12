import { Link } from "@remix-run/react";
import avalonLogo from "app/images/avalon-logo.png"

export default function Header() {

    return (
        <nav>
            <p className="avalon-creator"><Link to="/about">JP Magtang</Link></p>
            <h3 className="avalon-lettermark"><Link to="/">AVALON</Link></h3>
            <Link to="/" className="avalon-icon"><img src={avalonLogo} /></Link>
        </nav>
    )
}
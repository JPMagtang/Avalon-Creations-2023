import { Link } from "@remix-run/react";
import avalonLogo from "app/images/avalon-logo.png"

export default function Header() {

    return (
        <nav>
            <Link to="/about"><p className="avalon-creator">JP Magtang</p></Link>
            <Link to="/"><h3 className="avalon-lettermark">AVALON</h3></Link>
            <Link to="/" className="avalon-icon"><img src={avalonLogo} /></Link>
        </nav>
    )
}
import { Link } from "@remix-run/react";
import avalonLogo from "app/images/avalon-logo.png"


export default function Header() {
    return (
        <nav>
            <Link to="/" className="avalon-logo">
                <img className="avalon-icon" src={avalonLogo} />
                <h3 >
                    AVALON
                </h3>
            </Link>
            
            <p className="avalon-creator">
                <Link to="/about">JP Magtang</Link>
            </p>
        </nav>
    )
}
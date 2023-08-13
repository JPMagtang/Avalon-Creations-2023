import React from "react";
import { Link, NavLink, useLocation } from "@remix-run/react";
import Fade from "./Fade";

export default function Navigation() {
    const location = useLocation()
    return (
        <div className="navigation">
            <ul>
                <li><NavLink id="creations-link" to="/">Creations</NavLink></li>
                <li><NavLink id="about-link" to="/about" >About</NavLink></li>
                <li><NavLink id="connect-blogs" to="/blogs">Blogs</NavLink></li>
                <li><NavLink id="connect-link" to="/connect">Connect</NavLink></li>
            </ul>
        </div>
    )
}


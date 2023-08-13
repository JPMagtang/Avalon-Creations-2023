import { useState, useEffect } from "react";
import { NavLink } from "@remix-run/react";

export default function Navigation() {

    //Reserved for fututre reference
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };

    //     window.addEventListener("resize", handleResize);
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

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


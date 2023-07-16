import { LinksFunction } from "@remix-run/node";
import stylesLoader from "~/styles/loader.css";
import { useState, useEffect } from 'react';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesLoader },
];

export default function Loader() {

    return (
        <div className="loader-container">
            <div className="loader-ripple">
                <div>
                </div><div>
                </div>
            </div>
        </div>
    )
}


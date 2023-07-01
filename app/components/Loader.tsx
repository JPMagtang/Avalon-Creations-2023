import { LinksFunction } from "@remix-run/node";
import stylesLoader from "~/styles/loader.css";
import { useState, useEffect } from 'react';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesLoader },
];

export default function Loader() {
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);

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


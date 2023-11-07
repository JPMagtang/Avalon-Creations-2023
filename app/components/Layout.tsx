import { useState, useEffect } from 'react';

import Header from "./Header";
import Navigation from "./Navigation";
import Loader from './Loader';

type LayoutProps = {
    children: JSX.Element;
}

export default function Layout({children}: LayoutProps) {
    // Initial page loading effect.
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        }, 2500);
    }, []);
    return(
        <>
            {/* To continue from here */}
            {isLoading 
                ? <Loader /> 
                :<div className="container">
                    <Header />
                    {children}
                    <Navigation />
                    <div className="circular-backing"></div>
                </div>
            }
        </>
    );
}
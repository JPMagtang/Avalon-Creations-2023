import Header from "./Header";
import Navigation from "./Navigation";

type LayoutProps = {
    children: JSX.Element;
}

export default function Layout({children}: LayoutProps) {
    return(
        <div className="container">
            <Header />
            {children}
            <Navigation />
            <div className="circular-backing"></div>
        </div>
    );
}
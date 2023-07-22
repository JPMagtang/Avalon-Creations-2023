import type { LinksFunction } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';
import stylesUrl from "~/styles/global.css";
// import stylesSmall from "~/styles/global-small.css";
import projectsData from "~/projects-data";
import Fade from "~/components/Fade";

//Components
import Header from "~/components/Header";
import Project from "~/components/Project";
import Footer from "~/components/Footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl }
  // { rel: "stylesheet", href: stylesSmall }
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Avalon Creations" },
    { name: "description", content: "Welcome to Avalon!" },
  ];
};

export default function Index() {
  const projects = projectsData.map((project) => {
    return (
      <Project
      key={project.id}
      {...project}
      />
    )
  })

  // PAGE TRANSITION EFFECT
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);
  
  // TO RESEARCH: Remix.js transitions
  return (
    loading ? <Fade /> : (
      <div className="container">
        <div className="circular-backing"></div>
        <Header />
        <div className="main">
          <div className="main-content">
            <p>A REALM FOR DIGITAL</p>
            <h1 className="main-header">CREATIONS</h1>
            <ul>
              <li>Architecture</li>
              <li>UX|UI Design</li>
              <li>Software Development</li>
            </ul>
          </div>
          <div className="main-projects">
            {projects}
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}

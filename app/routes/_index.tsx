import type { LinksFunction } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import globalStyle from "~/styles/global.css";
import glitchStyle from "~/styles/glitch.css"
import projectsData from "~/projects-data";

import Project from "~/components/Project";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyle },
  { rel: "stylesheet", href: glitchStyle }
];

// To double check contents for each route.
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
  
  return (
    <div className="main">
      <div className="main-content">
        <p>A REALM FOR DIGITAL</p>
        <h1 className="hero glitch layers" data-text="CREATIONS"><span>CREATIONS</span></h1>
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
  );
}

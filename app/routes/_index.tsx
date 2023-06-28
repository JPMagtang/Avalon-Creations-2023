import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import stylesUrl from "~/styles/index.css";
import Project from "~/components/Project";
import projectsData from "~/projects-data";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Avalon Creations" },
    { name: "description", content: "Welcome to Avalon!" },
  ];
};


export default function Index() {
  const projects = projectsData.map(project => {
    return (
      <Project
        key={project.id}
        project={project}
      />
    )
  })

  return (
    <div className="container">
      <nav>
        <h3 className="avalon-logo">AVALON</h3><p className="avalon-creator">JP Magtang</p>
      </nav>

      <div className="main">
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

      <div className="footer">
        <ul>
          <li><Link to="">Creations</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="connect">Connect</Link></li>
        </ul>
      </div>

    </div>
  );
}

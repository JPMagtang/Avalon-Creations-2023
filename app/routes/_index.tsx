import type { LinksFunction } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global-large.css";
import projectsData from "~/projects-data";

//Components
import Header from "~/components/Header";
import Project from "~/components/Project";
import Footer from "~/components/Footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl }
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
      <Header />
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
      <Footer />
    </div>
  );
}

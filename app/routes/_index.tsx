import projectsData from "~/projects-data";

// Components
import Project from "~/components/Project";

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

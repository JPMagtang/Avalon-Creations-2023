
export default function Project(props : any) {
    return (
        <div className="project">
            <p>{props.project.yearCreated}|</p><p>{props.project.projectType}</p>
            <h2>
                {props.project.projectName}
            </h2>
        </div>
    )
}
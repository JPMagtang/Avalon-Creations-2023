export default function Project(props : any) {
    return (
        <div className="project">
            <p>{props.yearCreated}|</p><p>{props.projectType}</p>
            <a href={props.projectLink} target="_blank">
                <h2>{props.projectName}</h2>
            </a>
        </div>
    )
}
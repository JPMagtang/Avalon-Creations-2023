export default function Project(props : any) {
    return (
        <div className="project">
            <p>{props.yearCreated}|</p><p>{props.projectType}</p>
            <h2>
                <a href={props.projectLink} target="_blank">
                    {props.projectName}
                </a>
            </h2>
        </div>
    )
}
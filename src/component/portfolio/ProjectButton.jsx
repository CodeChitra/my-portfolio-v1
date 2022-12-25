import React from "react";
import "./ProjectButton.scss";

const ProjectButton = props => {
    return <button className="button">
        <a href={props.url}>{props.title}</a>
    </button>
}

export default ProjectButton;
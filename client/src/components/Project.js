import React, { useRef } from 'react'
import Link from 'react-router-dom'

const Project = ({ project }) => {
    console.log(project)
    return (
        <div className="col s12 m6">
            <div className="card">
                <a href="https://google.com">
                    <div className="card-image">
                        <img src={project.screenshot} />
                        <span className="card-title">{project.name}</span>
                    </div>
                    <div className="card-content">
                        <p>{project.description}</p>
                    </div>
                </a>
                <div className="card-action">
                    <a href="#">GitHub</a> <a href="#">Demo</a>
                </div>
            </div>
        </div>
    )
}

export default Project
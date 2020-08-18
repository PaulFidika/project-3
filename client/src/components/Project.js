import React, { useRef } from 'react'
import Link from 'react-router-dom'

const Project = ({ project }) => {
    console.log(project)
    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src="https://www.photographyblog.com/uploads/entryImages/_550xAUTO_fit_center-center_90_none/samyang_af_24mm_f2_8_fe_photos.jpg" />
                        <span className="card-title">{project.name.first} {project.name.last}</span>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
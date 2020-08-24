import React, { useEffect, useState } from 'react'
import axios from 'axios'

import data from '../data/stub.json'

const Page = (props) => {
    let id = props.match.params.id
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(data[id])
    }, [])

    return (
        <div className="row">
            <div className="s12">{projects.slug}</div>
        </div>
    )
}

export default Page
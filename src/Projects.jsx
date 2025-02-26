import React from 'react'

const Projects = ({projects}) => {
    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {projects.map((project, index) => {
                    return (
                        <li key={index}>{project}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Projects
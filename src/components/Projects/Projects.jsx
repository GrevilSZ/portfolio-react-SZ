import React from 'react'
import './Projects.css'
import { Button, Typography } from '@mui/material'
import { AiOutlineProject } from 'react-icons/ai'
import { Delete } from '@mui/icons-material'


const ProjectCard = ( {
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
} ) => {
    return (
        <>
            <a href={ url } className='projectCard' target='black'>
                <div>
                    <img src={ projectImage } alt="Project"/>
                    <Typography variant='h5'>{ projectTitle }</Typography>
                </div>
                <div>
                    <Typography variant='h4'>Sobre el proyecto</Typography>
                    <Typography>{ description }</Typography>
                    <Typography variant='h6'>Tecnologías: { technologies }</Typography>
                </div>
            </a>

            {isAdmin && (
                <Button style={{ color: 'rgba(40, 40, 40, 0.7)' }}>
                    <Delete />
                </Button>
            )}

        </>
    )
}

const Projects = () => {
  
    const projects = [];

    return (

    <div className='projects'>

        <Typography variant='h3'>
            Proyectos <AiOutlineProject/>
        </Typography>


        <div className="projectsWrapper">
            {projects.map(( project, index ) => (
                <ProjectCard 
                url=''
                projectImage=''
                projectTitle=''
                description=''
                technologies=''
                />
            ) )}
        </div>

    </div>
  )
}

export default Projects
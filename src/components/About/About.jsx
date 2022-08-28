import React from 'react'
import './About.css'
import { Typography } from '@mui/material'


const About = () => {
  return (
    
    <div className='about'>
       <div className="aboutContainer">
        <Typography>Texto de ejemplo, a ver que onda</Typography>
       </div>
       <div className="aboutContainer2">

        <div>
            <img src="" alt="" />
            <Typography variant='h4'>Santiago Zarza</Typography>
            <Typography>Front-End Developer</Typography>
            <Typography></Typography>

        </div>
        <div></div>

       </div>
    </div>

  )
}

export default About
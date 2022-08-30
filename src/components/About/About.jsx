import React from 'react'
import './About.css'
import { Typography } from '@mui/material'
import profilePhoto1 from '../../img/PROFILE_PHOTO1.jpg'


const About = () => {
  return (
    
    <div className='about'>
       <div className="aboutContainer">
        <Typography>Texto de ejemplo, a ver que onda</Typography>
       </div>
       <div className="aboutContainer2">

        <div>
            <img 
            src={ profilePhoto1 } 
            alt="Santiago Zarza"
            className='aboutAvatar'
            />
            <Typography 
            variant='h4'
            style={{ margin: '1vmax 0', color: 'black' }}
            >
              Santiago Zarza
            </Typography>
            <Typography>Front-End Developer</Typography>

        </div>
        <div>

          <Typography 
            style={{ 
              wordSpacing: '5px',
              lineHeight: '50px',
              letterSpacing: '5px',
              textAlign: 'right',
           }}
          >Ésto es una descripción, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Aspernatur, vero dolorum delectus tempore facilis suscipit excepturi amet quod, eaque architecto 
             ut commodi rerum neque eos aliquid pariatur tempora alias maxime?</Typography>

        </div>

       </div>
    </div>

  )
}

export default About
import React from 'react';
import './Home.css';
import { Typography } from '@mui/material'
import TimeLine from '../TimeLine/TimeLine'
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5
} from 'react-icons/si'


const Home = () => {
   
  
  return (
    <div className='home'>
      <canvas className='homeCanvas' ></canvas>

      <div className="homeContainer">
        <Typography variant='h3'> TIMELINE </Typography>
        <TimeLine timelines={ [ 1,2,3,4 ] } />
      </div>
      <div className="homeSkills">
        <Typography variant='h3'>SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img 
            src="https://i.ibb.co/fMdqVYF/PIBES-DE-LUXO.png"  
            alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img 
            src="https://i.ibb.co/fMdqVYF/PIBES-DE-LUXO.png"  
            alt="Face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img 
            src="https://i.ibb.co/fMdqVYF/PIBES-DE-LUXO.png"  
            alt="Face3"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img 
            src="https://i.ibb.co/fMdqVYF/PIBES-DE-LUXO.png"  
            alt="Face4"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img 
            src="https://i.ibb.co/fMdqVYF/PIBES-DE-LUXO.png"  
            alt="Face5"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img 
            src="https://i.ibb.co/fMdqVYF/PIBES-DE-LUXO.png"  
            alt="Face6"
            />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillBox">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiMongodb />
        </div>
      </div>

    </div>


  )
}

export default Home
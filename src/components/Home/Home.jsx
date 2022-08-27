import React from 'react';
import './Home.css';
import { Typography } from '@mui/material'
import TimeLine from '../TimeLine/TimeLine'

const Home = () => {
  
  
  
  
  
  
  
  
  return (
    <div className='home'>
      <canvas className='homeCanvas' ></canvas>

      <div className="homeContainer">
        <Typography variant='h3'> TIMELINE </Typography>
        <TimeLine timelines={ [ 1,2,3,4 ] } />
      </div>


    </div>


  )
}

export default Home
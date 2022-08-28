import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <Typography variant='h5'> Sobre Mí</Typography>
            <Typography>
                Hola! Mi nombre es <b>Santiago Zarza</b>, Front-End Developer.
            </Typography>

            <Link to='/contact' className='footerContactBtn'>
                <Typography>Contacto</Typography>
            </Link>
        </div>
        <div>
            <Typography variant='h6'>Redes Sociales</Typography>
            <a href="https://github.com/GrevilSZ" target='black'>
                <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/santiago-zarza-fiorino/" target='black'>
                <BsLinkedin />
            </a>
            <a href="https://twitter.com/grevil_sz" target='black'>
                <BsTwitter />
            </a>
            <a href="https://www.instagram.com/grevilsz" target='black'>
                <BsInstagram />
            </a>
        </div>
    </div>
  )
}

export default Footer
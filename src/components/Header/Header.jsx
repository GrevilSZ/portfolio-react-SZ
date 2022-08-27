import React from 'react'
import { ReactNavbar } from 'overlay-navbar';
import logo from '../../img/Logo_SZ.png'
import { FaUserAlt } from 'react-icons/fa'

function Header() {
  return (
    <ReactNavbar

      navColor1="white"
      navColor2="hsla(240, 100%, 2%)"
      burgerColor="hsla(268, 100%, 50%)"
      burgerColorHover="hsla(268, 100%, 50%)"
      logo={ logo }
      logoWidth="350px"
      logoHoverColor="hsla(268, 100%, 50%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Inicio"
      link2Text="Sobre Mi"
      link3Text="Proyectos"
      link4Text="Contacto"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="hsla(268, 100%, 50%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={ true }
      ProfileIconElement={ FaUserAlt }
      profileIconColor="hsla(268, 100%, 50%)"
      profileIconColorHover="white"
    />
  );
}

export default Header
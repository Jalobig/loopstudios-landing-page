import React from 'react'
import classes from './Header.module.scss'
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';
import ImageHero from '../../images/desktop/image-hero.jpg'

const Header = () => {
  return (
    <header className={classes.header}>
        <img src={ImageHero} alt='Background' className={classes.header__bg} />
        <Navbar/>
        <Intro/>
    </header>
  )
}

export default Header
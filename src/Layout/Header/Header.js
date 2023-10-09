import React from 'react'
import classes from './Header.module.scss'
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';
import ImageHero from '../../images/desktop/image-hero.jpg'
import ImageHeroMobile from '../../images/mobile/image-hero.jpg'
import useMediaQuery from '../../hooks/useMediaQuery';

const Header = () => {
  const media = useMediaQuery('only screen and (max-width:460px)')
  return (
    <header className={classes.header}>
        <img src={media? ImageHeroMobile: ImageHero} alt='Background' className={classes.header__bg} />
        <Navbar/>
        <Intro/>
    </header>
  )
}

export default Header
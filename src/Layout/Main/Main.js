import React from 'react'
import classes from './Main.module.scss'
import About from '../../components/About/About';
import Creations from '../../components/Creations/Creations';

const Main = () => {
  return (
    <main className={classes.main}>
      <About/>
      <Creations/>
    </main>
  )
}

export default Main
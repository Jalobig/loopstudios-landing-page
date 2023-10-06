import React from "react";
import classes from "./About.module.scss";
import Image from "../../images/desktop/image-interactive.jpg";
const About = () => {
  return (
    <div className={classes.about}>
      <img src={Image} alt="Man playing VR" className={classes.about__img} />
      <div className={classes.about__info}>
        <h1 className={classes.about__heading}>The leader in interactive VR</h1>
        <p className={classes.about__text}>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default About;

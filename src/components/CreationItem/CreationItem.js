import React from "react";
import classes from "./CreationItem.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";

const CreationItem = (props) => {
  const media = useMediaQuery('only screen and (max-width:583px)')
  return (
    <div className={classes.creation}>
      <div className={classes.creation__bg}>
        <img
          src={media? props.imgMobile: props.imgDesktop}
          alt={props.title}
          className={classes.creation__img}
        />
        <div className={classes.creation__backdrop}></div>
      </div>
      <h2 className={classes.creation__title}>{props.title}</h2>
    </div>
  );
};

export default CreationItem;

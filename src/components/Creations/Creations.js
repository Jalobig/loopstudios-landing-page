import React from "react";
import classes from "./Creations.module.scss";
import Button from "../Button/Button";
import ImageDeepEarthDesktop from "../../images/desktop/image-deep-earth.jpg";
import ImageDeepEarthMobile from "../../images/mobile/image-deep-earth.jpg";
import ImageNightArcadeDesktop from "../../images/desktop/image-night-arcade.jpg";
import ImageNightArcadeMobile from "../../images/mobile/image-night-arcade.jpg";
import ImageSoccerDesktop from "../../images/desktop/image-soccer-team.jpg";
import ImageSoccerMobile from "../../images/mobile/image-soccer-team.jpg";
import ImageGridDesktop from "../../images/desktop/image-grid.jpg";
import ImageGridMobile from "../../images/mobile/image-grid.jpg";
import ImageFromAboveDesktop from "../../images/desktop/image-from-above.jpg";
import ImageFromAboveMobile from "../../images/mobile/image-from-above.jpg";
import ImageBorealisDesktop from "../../images/desktop/image-pocket-borealis.jpg";
import ImageBorealisMobile from "../../images/mobile/image-pocket-borealis.jpg";
import ImageCuriosityDesktop from "../../images/desktop/image-curiosity.jpg";
import ImageCuriosityMobile from "../../images/mobile/image-curiosity.jpg";
import ImageFishEyeDesktop from "../../images/desktop/image-fisheye.jpg";
import ImageFishEyeMobile from "../../images/mobile/image-fisheye.jpg";
import CreationItem from "../CreationItem/CreationItem";

const CREATIONS = [
  {
    title: "Deep Earth",
    imgDesktop: ImageDeepEarthDesktop,
    imgMobile: ImageDeepEarthMobile,
  },
  {
    title: "Night arcade",
    imgDesktop: ImageNightArcadeDesktop,
    imgMobile: ImageNightArcadeMobile,
  },
  {
    title: "Soccer team vr",
    imgDesktop: ImageSoccerDesktop,
    imgMobile: ImageSoccerMobile,
  },
  {
    title: "The Grid",
    imgDesktop: ImageGridDesktop,
    imgMobile: ImageGridMobile,
  },
  {
    title: "From up above VR",
    imgDesktop: ImageFromAboveDesktop,
    imgMobile: ImageFromAboveMobile,
  },
  {
    title: "Pocket borealis",
    imgDesktop: ImageBorealisDesktop,
    imgMobile: ImageBorealisMobile,
  },
  {
    title: "The Curiosity",
    imgDesktop: ImageCuriosityDesktop,
    imgMobile: ImageCuriosityMobile,
  },
  {
    title: "Make it fisheye",
    imgDesktop: ImageFishEyeDesktop,
    imgMobile: ImageFishEyeMobile,
  },
];

const Creations = () => {
  return (
    <div className={classes.creations}>
      <div className={classes.creations__row}>
        <h1 className={classes.creations__heading}>Our Creations</h1>
        <Button>See all</Button>
      </div>
      <div className={classes.creations__grid}>
        {CREATIONS.map((creation) => (
          <CreationItem
            title={creation.title}
            imgDesktop={creation.imgDesktop}
            imgMobile={creation.imgMobile}
          />
        ))}
      </div>
    </div>
  );
};

export default Creations;

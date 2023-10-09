import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../images/logo.svg";
import IconClose from "../../images/icon-close.svg";
import IconHamburger from "../../images/icon-hamburger.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar = (props) => {
  const [isActive, setIsActive] = useState(false);
  const media = useMediaQuery("only screen and (max-width:660px)");
  const menuHandler = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <nav className={classes.navbar}>
      <img
        src={Logo}
        alt="Logo of loopstudios"
        className={classes.navbar__logo}
        onClick={menuHandler}
      />
      {media && (
        <img
          src={IconHamburger}
          alt="Icon Hamburger"
          className={classes.navbar__icon}
        />
      )}
      {(!media || isActive) && (
        <ul className={classes.navbar__nav}>
          <li className={classes["navbar__nav-item"]}>About</li>
          <li className={classes["navbar__nav-item"]}>Careers</li>
          <li className={classes["navbar__nav-item"]}>Events</li>
          <li className={classes["navbar__nav-item"]}>Products</li>
          <li className={classes["navbar__nav-item"]}>Support</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

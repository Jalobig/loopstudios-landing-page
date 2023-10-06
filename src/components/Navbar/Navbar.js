import React from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../images/logo.svg";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar} >
      <img
        src={Logo}
        alt="Logo of loopstudios"
        className={classes.navbar__logo}
      />
      <ul className={classes.navbar__nav}>
        <li className={classes["navbar__nav-item"]}>About</li>
        <li className={classes["navbar__nav-item"]}>Careers</li>
        <li className={classes["navbar__nav-item"]}>Events</li>
        <li className={classes["navbar__nav-item"]}>Products</li>
        <li className={classes["navbar__nav-item"]}>Support</li>
      </ul>
    </nav>
  );
};

export default Navbar;

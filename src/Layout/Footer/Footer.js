import React from "react";
import classes from "./Footer.module.scss";
import Logo from "../../images/logo.svg";
import FacebookIcon from '../../images/icon-facebook.svg'
import TwitterIcon from '../../images/icon-twitter.svg'
import PinterestIcon from '../../images/icon-pinterest.svg'
import InstagramIcon from '../../images/icon-instagram.svg'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__row}>
        <nav className={classes.footer__navbar}>
          <img
            src={Logo}
            alt="Logo of loopstudios"
            className={classes.footer__navbar__logo}
          />
          <ul className={classes.footer__navbar__nav}>
            <li className={classes["footer__navbar__nav-item"]}>About</li>
            <li className={classes["footer__navbar__nav-item"]}>Careers</li>
            <li className={classes["footer__navbar__nav-item"]}>Events</li>
            <li className={classes["footer__navbar__nav-item"]}>Products</li>
            <li className={classes["footer__navbar__nav-item"]}>Support</li>
          </ul>
        </nav>
        <div className={classes.footer__column}>
          <div className={classes.footer__social}>
            <div className={classes.footer__group}><img src={FacebookIcon} alt="Facebook Icon" className={classes.footer__icon} /></div>
            <div className={classes.footer__group}><img src={TwitterIcon} alt="Twitter Icon" className={classes.footer__icon} /></div>
            <div className={classes.footer__group}><img src={PinterestIcon} alt="Pinterest Icon" className={classes.footer__icon} /></div>
            <div className={classes.footer__group}><img src={InstagramIcon} alt="Instagram Icon" className={classes.footer__icon} /></div>
          </div>
          <p className={classes.footer__copy}>
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
      <div className={classes.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Jalobig" rel="noreferrer" target="_blank">
          Jason Alexis
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import classes from './MenuMobile.module.scss'
import IconClose from '../../images/icon-close.svg'
import Logo from '../../images/logo.svg'

const MenuMobile = (props) => {
  return (
    <div className={classes.menu}>
        <div className={classes.menu__row}>
        <img
        src={Logo}
        alt="Logo of loopstudios"
        className={classes.menu__logo}
        />
        <img
        src={IconClose}
        alt="Icon for closing menu"
        className={classes.menu__icon}
        onClick={props.onClose}
        />
        </div>
        <ul className={classes.menu__nav}>
          <li className={classes["menu__nav-item"]}>About</li>
          <li className={classes["menu__nav-item"]}>Careers</li>
          <li className={classes["menu__nav-item"]}>Events</li>
          <li className={classes["menu__nav-item"]}>Products</li>
          <li className={classes["menu__nav-item"]}>Support</li>
        </ul>
    </div>
  )
}

export default MenuMobile
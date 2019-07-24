import React from "react";
import classes from "./Header.module.css";

import profile from '../../Media/profile.JPG'
const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <i className="fas fa-search" />
        <input type="text" placeholder={"Search..."} />
      </div>
      <div className={classes.profile}>
          <img src={profile} className={classes.image} /> <span className={classes.chevron}>˅</span>
         
      </div>
    </div>
  );
};

export default Header;

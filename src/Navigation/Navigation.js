import React from "react";
import classes from "./Navigation.module.css";
import Menu from './Menu/Menu'
const Navigation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <div className={classes.logo} />{" "}
        <span>
          <div className={classes.menu} />
          <div className={classes.menu} />
          <div className={classes.menu} />
        </span>
      </div>
      <Menu />
    </div>
  );
};

export default Navigation;

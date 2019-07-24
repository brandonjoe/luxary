import React from "react";
import classes from "./MenuComponents.module.css";

const MenuComponents = props => {
  
  return (
    <div className={classes.container} style={{background: `${props.stylerr}`}}>
      <i className={` ${props.icon} ${classes.icon}`} style={{color: `${props.styler}`}} ></i>
      <div>{props.name}</div>
      <div className={classes.chevron} >{props.chevron}</div>
    </div>
  );
};

export default MenuComponents;

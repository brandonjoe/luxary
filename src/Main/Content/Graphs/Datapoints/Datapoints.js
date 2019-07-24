import React from 'react';
import classes from './Datapoints.module.css'
const Datapoints = (props) => {
    return (
        <div className={classes.container}>
           <div className={classes.data}>{props.data}</div>
           <div className={classes.data2}>{props.data2}</div>
        </div>
    );
};

export default Datapoints;

import React, { Component } from 'react';
import classes from './Content.module.css';
 
import Dates from './Dates/Dates'
import Graphs from './Graphs/Graphs'

class Content extends Component {
    
    render() {
        return (
            <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.titleSection}>
                    <div className={classes.title}>
                        Dashboard
                    </div>
                    <div className={classes.subtitle}>dashboard & statistics</div>
                </div>
                <Dates/>
                
            </div>
            <Graphs />
        </div>
        );
    }
}

export default Content;

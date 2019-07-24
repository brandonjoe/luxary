import React from 'react';
import classes from './Main.module.css';
import Header from './Header/Header'
import Content from './Content/Content'
const Main = () => {
    return (
        <div className={classes.container}>
            <Header />
            <Content />
        </div>
    );
};

export default Main;
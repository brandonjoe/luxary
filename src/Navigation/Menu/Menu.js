import React from 'react';
import classes from './Menu.module.css';

import MenuComponents from '../MenuComponents/MenuComponents'


const Menu = () => {
    let buttonstyle = {
        color: 'ghostwhite',
        background: `rgb(48,181,224)`,
        padding: '1rem 2rem 1rem 2rem',
        fontSize: '1rem',
        fontWeight: '200'
    }
    return (
        <div className={classes.container}>
            <MenuComponents icon={'fas fa-calendar-week'} name={'Calender'} chevron={""}/>
            <MenuComponents icon={'far fa-file-alt'} name={'Documentation'} chevron={""}/>
            <MenuComponents icon={'fas fa-home'} styler={'rgb(48,181,224)'} stylerr={"rgb(255,255,255)"} name={'Dashboard'} chevron={""} />
            <br />
            <br />
            <MenuComponents icon={'fas fa-fire'} name={'Admin Plugins'} chevron={"›"}/>
            <MenuComponents icon={'far fa-check-square'} name={'Admin Forms'} chevron={"›"}/> 
            <MenuComponents icon={'fas fa-image'} name={'Admin Layout'} chevron={"›"}/> 
            <br />
            <br />
            <MenuComponents icon={'fas fa-chart-bar'} name={'Information Panels'} chevron={"›"}/> 
            <MenuComponents icon={'fas fa-shopping-basket'} name={'Ecommerce'} chevron={"›"}/> 
            <br />
            <br />
            <MenuComponents icon={'far fa-gem'} name={'UI Elements'} chevron={"›"}/> 
            <MenuComponents icon={'fas fa-bars'} name={'Form Elements'} chevron={"›"}/> 
            <MenuComponents icon={'fas fa-cog'} name={'Plugins'} chevron={"›"}/> 
            <MenuComponents icon={'fas fa-paste'} name={'Pages'} chevron={"›"}/> 
            <br />
            <br />
            <MenuComponents icon={'far fa-circle'} styler={'rgb(241,190,66)'} name={'Executive Meeting'} chevron={""}/>
            <MenuComponents icon={'far fa-circle'} styler={'rgb(251,80,71)'} name={'HelpDesk Redesign'} chevron={""}/>
            <MenuComponents icon={'far fa-circle'} styler={'rgb(149,122,219)'} name={'Sony Board Meeting'} chevron={""}/>
        </div>
    );
};

export default Menu;
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classes from './Dates.module.css'
import { fontWeight } from '@material-ui/system';
export default function Dates() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  let buttonstyle = {
      color: 'ghostwhite',
      background: `rgb(48,181,224)`,
      padding: '1rem 2rem 1rem 2rem',
      fontSize: '1rem',
      fontWeight: '200'
  }
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" style={buttonstyle} onClick={handleClick}>
        17 January 2016 - 15 February 2016  &nbsp;  &nbsp; ˅
      </Button>
      <Menu 
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={buttonstyle} onClick={handleClose}>17 January 2016 - 15 February 2016</MenuItem>
        <MenuItem style={buttonstyle} onClick={handleClose}>17 February 2016 - 15 March 2016</MenuItem>
        <MenuItem style={buttonstyle} onClick={handleClose}>17 March 2016 - 15 April 2016</MenuItem>
      </Menu>
    </div>
  );
}
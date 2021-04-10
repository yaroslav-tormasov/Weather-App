import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Time from '../Time/Time';
import {NavLink} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div className="Menu">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <MenuItem onClick={handleClose}  title={'Time'}>
                    <NavLink to="/time">Time</NavLink>
                </MenuItem>
                {/*<MenuItem onClick={handleClose} title={'Weather'}>*/}
                {/*    Weather*/}
                {/*</MenuItem>*/}
            </Menu>
        </div>
    );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink} from 'react-router-dom';

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
            <Button style={ {backgroundColor: "white"} }
            size="large" variant="contained"  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
               Меню
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}  title={'Главная'}>
                    <NavLink to="/">Главная</NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}  title={'Время'}>
                    <NavLink to="/time">Время</NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose} title={'Погода'}>
                    <NavLink to="/weather">Погода</NavLink>
                </MenuItem>
            </Menu>
        </div>
    );
}
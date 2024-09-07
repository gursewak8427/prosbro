import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function CustomMenu({ children, menuItems }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        event?.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        e?.stopPropagation();
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="custom-button"
                aria-controls={open ? 'custom-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {children}
            </Button>
            <Menu
                id="custom-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'custom-button',
                }}
            >
                {menuItems.map((item, index) => (
                    <MenuItem className={`${item?.className || ""}`} key={index} onClick={(e) => { e?.stopPropagation(); item.onClick(); handleClose(); }}>
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

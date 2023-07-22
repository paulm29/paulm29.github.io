import { Link, NavLink } from "react-router-dom"
import { useContext, useState } from "react";
import { ThemeContext } from "../common/context/ThemeContext";
import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    const theme = useContext(ThemeContext);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar>
            <Toolbar>
                <Typography>Wisdomology</Typography>
                <NavLink to="/">Home</NavLink>
                &nbsp;
                <Link to="/about">About</Link>

                {/*<Menu*/}
                {/*    id="basic-menu"*/}
                {/*    anchorEl={anchorEl}*/}
                {/*    open={open}*/}
                {/*    onClose={handleClose}*/}
                {/*    MenuListProps={{*/}
                {/*        'aria-labelledby': 'basic-button',*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                {/*    <MenuItem onClick={handleClose}>My account</MenuItem>*/}
                {/*    <MenuItem onClick={handleClose}>Logout</MenuItem>*/}
                {/*</Menu>*/}
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;

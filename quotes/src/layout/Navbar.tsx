import { useState } from 'react';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // const theme = useContext(ThemeContext);

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const open = Boolean(anchorEl);
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position={'sticky'} color="secondary" elevation={2}>
            <Toolbar>
                <Typography>Wisdomology</Typography>
                &nbsp;
                <Link component={RouterLink} to="/">Home</Link>
                &nbsp;
                <Link component={RouterLink} to="/quote/new">New Quote</Link>
                &nbsp;
                <Link component={RouterLink} to="/about">About</Link>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;

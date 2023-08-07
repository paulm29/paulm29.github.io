import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Footer from './Footer';
import './RootLayout.css';
import { Container, ThemeProvider } from '@mui/material';
import theme from './theme';

const RootLayout = () => {
    // const [theme, setTheme] = useState<ThemeContextType>("light");

    return (
        <>
            {/*<ThemeContext.Provider value={theme}>*/}
            <ThemeProvider theme={theme}>
                <Navbar/>
                <Container>
                    <Outlet/>
                </Container>
                <Footer/>
            </ThemeProvider>
            {/*</ThemeContext.Provider>*/}
        </>
    )
}
export default RootLayout;

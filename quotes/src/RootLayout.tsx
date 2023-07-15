import { ThemeContext, ThemeContextType } from "./context/ThemeContext";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./Footer";

const RootLayout = (props: any) => {
    const [theme, setTheme] = useState<ThemeContextType>("light");

    return (
        <>
            {/*<Provider store={store}>*/}
            <ThemeContext.Provider value={theme}>
                <Navbar/>
                <Outlet />
                <Footer/>
            </ThemeContext.Provider>
            {/*</Provider>*/}
        </>
    )
}
export default RootLayout;

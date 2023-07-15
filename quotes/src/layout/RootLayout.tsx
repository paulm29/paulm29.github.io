import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./Footer";
import { ThemeContext, ThemeContextType } from "../common/context/ThemeContext";

const RootLayout = () => {
    const [theme, setTheme] = useState<ThemeContextType>("light");

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Navbar/>
                    <Outlet/>
                <Footer/>
            </ThemeContext.Provider>
        </>
    )
}
export default RootLayout;

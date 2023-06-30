import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
    return (
        <>
            <Navbar/>
            <BrowserRouter basename={window.location.pathname || ''}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

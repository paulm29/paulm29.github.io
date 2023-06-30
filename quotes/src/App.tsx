import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    );
}

export default App;

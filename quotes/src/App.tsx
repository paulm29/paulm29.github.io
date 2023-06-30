import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";

function App() {
    const [quote, setQuote] = useState("")
    const navigate = useNavigate();

    function randomIntFromInterval(min: number, max: number): number { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    async function getRandomQuote() {
        const res = await fetch("./json/quotes.json");
        const data = await res.json();
        const randomIndex = randomIntFromInterval(0, data.length-1);
        setQuote(data[randomIndex].quote)
    }

    useEffect(() => {
        getRandomQuote();
    }, [getRandomQuote]);

    return (
        <>
            <Navbar/>
            <div className="App">
                <header className="App-header">
                    Quotes
                </header>
                <p>{quote}</p>
                <button onClick={getRandomQuote}>Display random quote</button>
            </div>
            {/*<button className="btn" onClick={() => navigate('order-summary')}>*/}
            {/*    Place Order*/}
            {/*</button>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    );
}

export default App;

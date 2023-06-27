import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [quote, setQuote] = useState("")

    function randomIntFromInterval(min, max) { // min and max included
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
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                Quotes
            </header>
            <p>{quote}</p>
            <button onClick={getRandomQuote}>Display random quote</button>
        </div>
    );
}

export default App;

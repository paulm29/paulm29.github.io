import React, { lazy, useEffect, useState } from 'react';
import './App.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import { fetchQuotes, fetchQuotesFromBin, selectStatus } from './features/quote/quote-slice';
import { Quote } from './model/quote';

const ExportQuotes = lazy(() => import('./features/quote/QuoteExport'));

function App() {
    const quotes = useAppSelector((state) => state.quote.quotes);
    const dispatch = useAppDispatch();

    const status = useAppSelector(selectStatus);

    const loaderData = useLoaderData();

    const [numDogs, setNumDogs] = useState(10);
    const {data = [], isFetching} = useFetchBreedsQuery(numDogs);

    function handleClick() {
        dispatch(fetchQuotesFromBin(10));
    }

    function getRandomQuoteClicked() {
        dispatch(fetchQuotesFromBin(10));
    }

    const navigate = useNavigate();

    const [quote, setQuote] = useState('');

    function randomIntFromInterval(min: number, max: number): number { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    async function fetchRandomQuote() {
        const res = await fetch('./json/quotes.json');
        const data = await res.json();
        const randomIndex = randomIntFromInterval(0, data.length - 1);
        setQuote(data[randomIndex].quote);
    }

    useEffect(() => {
        // fetchRandomQuote();
        dispatch(fetchQuotes(10));
    }, []);

    return (
        <>
            <div className="App">
                <header className="App-header">
                    Quotes
                </header>
                <p>{quote}</p>
                <button onClick={getRandomQuoteClicked}>Display random quote</button>

                {/*<button type="button" onClick={handleClick}>*/}
                {/*    {status === "loading"*/}
                {/*        ? "Loading todos..."*/}
                {/*        : "Load todos"}*/}
                {/*</button>*/}

                <ul>
                    {
                        quotes.map((quote: Quote) =>
                            <li key={quote.id}>{quote.quote}</li>
                        )
                    }
                </ul>
            </div>
        </>
    );

}

export default App;

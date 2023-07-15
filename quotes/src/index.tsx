import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import NoMatch from "./NoMatch";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RootLayout from "./RootLayout";
import QuoteView from "./features/quote/QuoteView";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter basename={window.location.pathname || ''}>
            <Provider store={store}>
            {/*<Suspense fallback={<p>Loading...</p>}>*/}
                <Routes>
                    <Route path="/" element={<RootLayout/>}>
                        <Route index={true} path="/" element={<App/>} loader={() => {
                            return { loaderData: "loader data"};
                        }}/>
                        <Route path="/quote/:quoteId" element={<QuoteView/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Route>
                    <Route path="*" element={<NoMatch/>} />
                </Routes>
            </Provider>
            {/*</Suspense>*/}
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

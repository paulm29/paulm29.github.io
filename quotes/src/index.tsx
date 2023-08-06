import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from "./About";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RootLayout from "./layout/RootLayout";
import QuoteView from "./features/quote/QuoteView";
import ErrorPage from "./common/error/ErrorPage";
import NoMatch from "./common/error/NoMatch";
import QuoteNew from "./features/quote/QuoteNew";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>} errorElement={<ErrorPage/>}>
            <Route
                index={true}
                path="/"
                element={
                    <Suspense fallback={<p>Loading...</p>}>
                        <App/>
                    </Suspense>
                }
                loader={() => {
                    return { loaderData: "loader data" };
                }}
            />
            <Route path='/quote/new' element={<QuoteNew/>}/>
            <Route path="/quote/:quoteId" element={<QuoteView/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NoMatch/>}/>
        </Route>
    )
)

root.render(
    <React.StrictMode>
        {/*<BrowserRouter basename={window.location.pathname || ''}>*/}
        <Provider store={store}>
            <RouterProvider router={router}/>


        </Provider>

        {/*</BrowserRouter>*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

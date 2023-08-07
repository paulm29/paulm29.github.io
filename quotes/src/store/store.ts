import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/dogs/dogs-api-slice';
import quoteReducer from '../features/quote/quote-slice';

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

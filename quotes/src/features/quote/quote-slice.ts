import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Quote } from "../../model/quote";
import { RootState } from "../../store/store";
import axios from "axios";

interface QuoteState {
    quotes: Quote[];
    loading: boolean
    status: "loading" | "idle";

    // `error` will contain an error message.
    error: string | null;
}

const initialState: QuoteState = {
    quotes: [],
    loading: false,
    error: null,
    status: "idle"
};

export const selectStatus = (state: RootState) =>
    state.quote.status;

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        addQuotes(state, action: PayloadAction<Quote>) {
            state.quotes.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        // When we send a request,
        // `fetchTodos.pending` is being fired:
        builder.addCase(fetchQuotes.pending, (state) => {
            console.log("pending");
            // At that moment,
            // we change status to `loading`
            // and clear all the previous errors:
            state.status = "loading";
            state.error = null;
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchQuotes.fulfilled,
            (state, { payload }) => {
                // We add all the new todos into the state
                // and change `status` back to `idle`:
                console.log("payload", payload);
                // state.quotes.push(...payload);
                state.quotes = payload;
                state.status = "idle";
            });

        // When a server responses with an error:
        builder.addCase(fetchQuotes.rejected,
            (state, { payload }) => {
                console.log("rejected");

                // We show the error message
                // and change `status` back to `idle` again.
                if (payload) state.error = payload.message;
                state.status = "idle";
            });

        // [fetchQuotes.pending]: (state) => {
        //   state.loading = true
        // },
        // [fetchQuotes.fulfilled]: (state, { payload }) => {
        //   state.loading = false
        //   state.quotes = payload
        // },
        // [fetchQuotes.rejected]: (state) => {
        //   state.loading = false
        // }
    }
});

// const res = await fetch("./json/quotes.json");
// const data = await res.json();
// const randomIndex = randomIntFromInterval(0, data.length - 1);
// setQuote(data[randomIndex].quote)

type FetchTodosError = {
    message: string;
};

export const fetchQuotes = createAsyncThunk<
Quote[],
    number,
{ rejectValue: FetchTodosError }
    >(
    'quotes/getQuotes',
    async (limit: number = 10, thunkApi) => {
        // const response = await fetch('./../json/quotes.json');
        //
        // // Check if status is not okay:
        // if (response.status !== 200) {
        //     // Return the error message:
        //     return thunkApi.rejectWithValue({
        //         message: "Failed to fetch todos."
        //     });
        // }
        //
        // return await response.json()
        const response = await axios.get('./../json/quotes.json');
        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to fetch quotes."
            });
        }

        return await response.data;
    })

export const fetchQuotesFromBin = createAsyncThunk<
    Quote[],
    number,
    { rejectValue: FetchTodosError }
    >(
    'quotes/getQuotesFromBin',
    async (limit: number = 10, thunkApi) => {
        const binId = "64b1ff58b89b1e2299bf1cea";
        const url = `https://api.jsonbin.io/v3/b/${binId}/latest`;
        const xMasterKey = "$2b$10$Jeex8bYbcptQg2Eoo7cKpu3Ymc6irBwn/0FRWJw.59t9fo/ZndW7q";
        const config = {
            headers:{
                "X-Master-Key": xMasterKey
            }
        };
        const response = await axios.get(url, config);
        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to fetch quotes."
            });
        }

        return await response.data;
    })

export const { addQuotes } = quoteSlice.actions;
export default quoteSlice.reducer;

// export const quoteSlice = createApi({
//   reducerPath: 'quote',
//   baseQuery: fetchBaseQuery({
//     baseUrl: '',
//     prepareHeaders(headers) {
//       // headers.set('x-api-key', DOGS_API_KEY);
//
//       return headers;
//     },
//   }),
//   endpoints(builder) {
//     return {
//       fetchQuotes: builder.query<Quote[], number | void>({
//         query(limit = 10) {
//           return `/breeds?limit=${limit}`;
//         },
//       }),
//     };
//   },
// });

// export const { getQuotes, addQuote } = quoteSlice.actions;
// export const { fetchQuotes } = quoteSlice;

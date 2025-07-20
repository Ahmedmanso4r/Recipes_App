import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import languageReducer from "./slices/language";

const store = configureStore({
    reducer: {
        counter : counterReducer,
        language : languageReducer
    },
});

export default store;
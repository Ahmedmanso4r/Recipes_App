import {createSlice} from '@reduxjs/toolkit';
const languageSlice = createSlice({
    name : "language",
    initialState : {
        currentLang : "en",
        availableLangs : ["en", "fr", "es"],
    },
    reducers : {
        changeCurrentLang : (state, action) => {
            state.currentLang = action.payload
        },
    }
});

export const {changeCurrentLang} = languageSlice.actions;
export default languageSlice.reducer;
'use client';

import { createSlice } from "@reduxjs/toolkit";
const initialState = {value: 'en'}

export const languageSlice = createSlice({
    name:'language',
    initialState,
    reducers:{
        langToEng:(state) => {state.value = 'en'},
        langToRus:(state) => {state.value = 'ru'},
    }
})

export const {langToEng, langToRus} = languageSlice.actions;

export default languageSlice.reducer;
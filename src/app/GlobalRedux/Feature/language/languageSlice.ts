'use client';

const local = localStorage?.getItem('lang') ? JSON.parse(localStorage?.getItem('lang') as string) : 'en';

import { createSlice } from "@reduxjs/toolkit";
const initialState = {value: local}

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
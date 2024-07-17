'use client';

import { configureStore } from "@reduxjs/toolkit";
import langReducer from '@/app/GlobalRedux/Feature/language/languageSlice';

export const store = configureStore({
    reducer:{
        lang:langReducer
    }
})


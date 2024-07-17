'use client';

interface ProvidersProps {
    children: ReactNode;
  }

import { Provider } from "react-redux";
import {store} from "./store";
import { ReactNode } from "react";

function Providers({children}:ProvidersProps) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providers
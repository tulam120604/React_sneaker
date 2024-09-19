import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { sliceProduct } from './slicesApi/Items';

export const Stores = configureStore({
    reducer: {
        [sliceProduct.reducerPath]: sliceProduct.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sliceProduct.middleware)
});

setupListeners(Stores.dispatch);
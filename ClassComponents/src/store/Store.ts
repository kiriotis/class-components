import { configureStore } from '@reduxjs/toolkit';

import { ServerApi } from '../services/apiServices';
import chekedSlice from './chekedSlice';

export const store = configureStore({
    reducer: {
        chekedSlice: chekedSlice,
        [ServerApi.reducerPath]: ServerApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(ServerApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

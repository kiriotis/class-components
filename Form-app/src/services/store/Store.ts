import { configureStore } from '@reduxjs/toolkit';
import formSlicer from './../slice/NewSliser';
import formSlice from './../slice/Slicer';
export const store = configureStore({
    reducer: { formSlice: formSlice, formSlicer: formSlicer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

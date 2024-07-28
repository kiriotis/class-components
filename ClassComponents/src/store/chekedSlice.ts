import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { iPerson } from '../interfaces/start-wars.interface';

export interface CounterState {
    value: string[];
    objectValue: iPerson[];
}

const initialState: CounterState = {
    value: [],
    objectValue: [],
};

export const counterSlice = createSlice({
    name: 'checkeSlice',
    initialState,
    reducers: {
        AddChekes: (state, action: PayloadAction<string>) => {
            if (state.value[0] == undefined) {
                state.value.push(action.payload);
            } else {
                if (state.value.includes(action.payload)) {
                    state.value.forEach((element, index) => {
                        if (action.payload == element) {
                            state.value.splice(index, 1);
                        }
                    });
                } else {
                    state.value.push(action.payload);
                }
            }
        },
        DelItems: (state) => {
            state.value = [];
        },
        AddObject: (state, action: PayloadAction<iPerson>) => {


            if (state.objectValue.length == 0) {
                state.objectValue.push(action.payload);
            } else {
                let count = true;
                state.objectValue.forEach((el, index) => {
                    if (action.payload.name == el.name) {
                        state.objectValue.splice(index, 1);
                        count = false;
                    }
                });
                if (count) {
                    state.objectValue.push(action.payload);
                }
            }
        },
    },
});

export const { AddChekes, DelItems, AddObject } = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Country {
    code: string;
    name: string;
}

interface FormState {
    picture: string | null;
}

const initialState: { countries: Country[]; form: FormState } = {
    countries: [
        { code: 'US', name: 'United States' },
        { code: 'CA', name: 'Canada' },
        // Add more countries here...
    ],
    form: {
        picture: null,
    },
};

const formSlicer = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setPicture: (state, action: PayloadAction<string | null>) => {
            state.form.picture = action.payload;
        },
    },
});

export const { setPicture } = formSlicer.actions;
export default formSlicer.reducer;

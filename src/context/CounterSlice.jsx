import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, par) => {
            state.value += 1;
            console.log(par.payload)
        },

        decrement: (state) => {
            state.value -= 1;
        },

        countAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const {increment, decrement, countAmount} = counterSlice.actions;
export default counterSlice.reducer;
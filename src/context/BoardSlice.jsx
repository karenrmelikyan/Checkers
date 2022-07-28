import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    boardValues: []
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        initBoard: (state) => {
            let field = true;
            for (let i = 0; i < 8; i ++) {
                state.boardValues[i] = [];
                field = !field;
                for (let j = 0; j < 8; j ++) {
                    field = !field;
                    state.boardValues[i].push(field);
                }
            }
        },

        updateBoard: (state, newData) => {
            state.boardValues = newData.payload;
        },
    },
});

export const {initBoard, updateBoard} = boardSlice.actions;
export default boardSlice.reducer;
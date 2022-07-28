import {configureStore} from '@reduxjs/toolkit';
//import counterReducer from './CounterSlice';
import boardReducer from './BoardSlice';

export const store = configureStore({
    reducer: {
        board: boardReducer,
        //counter:  counterReducer,
    },
});
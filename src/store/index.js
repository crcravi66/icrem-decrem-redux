import { createSlice, configureStore } from '@reduxjs/toolkit';
import { legacy_createStore } from 'redux';

// export const INCREMENT = 'increment'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

// const counterReducer = (state = initialState, action) => {
//     if (action.type === INCREMENT) {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "toggle") {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }

// const store = legacy_createStore(counterReducer);
// const store = legacy_createStore(counterSlice.reducer);

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterAction = counterSlice.actions;
export default store;
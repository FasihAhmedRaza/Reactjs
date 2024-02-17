import { createAction, createReducer } from '@reduxjs/toolkit'



// const increment = createAction('counter/increment')
const incrementByAmount = createAction('counter/incrementByAmount') // Actions 

const initialState = { value: 0 } // initial Store or state

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
});


//action.payload = 5

export {incrementByAmount}

export default rootReducer;
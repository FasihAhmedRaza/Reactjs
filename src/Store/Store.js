import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({  // Creating a Store
    reducer: rootReducer,
  });


  export default store;
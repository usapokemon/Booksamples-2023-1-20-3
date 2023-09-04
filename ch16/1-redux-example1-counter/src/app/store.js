import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import creditReducer from '../features/credit/creditSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    credit:creditReducer
  },
   
});


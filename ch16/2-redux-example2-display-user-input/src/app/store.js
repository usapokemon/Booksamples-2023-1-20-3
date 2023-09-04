import { configureStore } from '@reduxjs/toolkit';


import creditReducer from '../features/student/studentSlice';
import studentReducer from '../features/student/studentSlice';

export const store = configureStore({
  reducer: {
    
    credit:  creditReducer,
    student: studentReducer
  },
   
});


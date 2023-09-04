import { createSlice } from '@reduxjs/toolkit';
//import { fetchStudent } from './creditAPI';

const initialState = {
  credit: 0,
  student: '',
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
      setCredit: (state,actions) => {
        state.credit = actions.payload;
      },
      setStudent: (state, actions) => {
        state.student = actions.payload;
      }
  },
});

export const { setCredit, setStudent } = studentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCredit = (state) => state.credit.value;

export default studentSlice.reducer;

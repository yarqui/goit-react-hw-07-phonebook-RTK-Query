import { createSlice } from '@reduxjs/toolkit';

export const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setContactFilter: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(filter) {
        return {
          payload: filter,
        };
      },
    },
  },
});

export const { setContactFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

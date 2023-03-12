import { createSlice } from '@reduxjs/toolkit';

export const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setContactFilter: {
      reducer(_, action) {
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

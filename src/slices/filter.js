import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filter: [0, 1, 2, 3, 4],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterSelector = (state) => state.filter;

export default filterSlice.reducer;

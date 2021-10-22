import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://www.mocky.io/v2/5d889c8a3300002c0ed7da42';

export const initialState = {
  loading: false,
  errors: false,
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.errors = false;
    },
    getUsersFailure: (state) => {
      state.loading = false;
      state.errors = true;
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersFailure } =
  usersSlice.actions;

export const usersSelector = (state) => state.users;

export function fetchUsers() {
  return async (dispatch) => {
    dispatch(getUsers());

    try {
      const response = await axios.get(API_URL);
      const data = response.data;

      if (data.items) {
        dispatch(getUsersSuccess(data.items));
      } else {
        dispatch(getUsersFailure());
      }
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
}

export default usersSlice.reducer;

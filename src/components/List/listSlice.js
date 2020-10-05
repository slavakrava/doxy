import { createSlice } from '@reduxjs/toolkit';
import data from '../../tmp/db.json';

export const listSlice = createSlice({
  name: 'newsList',
  initialState: {
    list: [],
  },
  reducers: {
    setNewsList: (state, action) => {
      state.list = action.payload;
    },
    addNewsToList: (state, action) => {
      state.list.push(action.payload);
    },
  }
});

export const { setNewsList, addNewsToList } = listSlice.actions;

export const loadNewsList = () => dispatch => {
  dispatch(setNewsList(data));
};

export default listSlice.reducer;
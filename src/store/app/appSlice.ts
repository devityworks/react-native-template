import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const authSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onSetAppLoading(state, action) {
      state.loading = action?.payload;
    },
  },
});

export const {reducer, actions} = authSlice;
export default reducer;

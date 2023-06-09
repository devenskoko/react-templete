import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface AppState {
  count: number;
}

const initialState: AppState = { count: 0 };

// pending（进行中）、fulfilled（成功）、rejected（失败）
export const getUserData = createAsyncThunk('user/getList', async () => {
  return await fetch('https://api.github.com/search/users?q=wang').then((res) => res.json());
});

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    incremented: (state) => {
      state.count += 1;
    },
    decremented: (state) => {
      state.count -= 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.count = payload.total_count;
    });
  },
});

export const selectAppSlice = (state: RootState) => state.app;
export const { decremented, incremented, setCount } = appSlice.actions;
export default appSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBook, IBookSliceState, Status } from './types';
import { fetchBooks } from './asyncActions';

const initialState: IBookSliceState = {
  items: [],
  status: Status.LOADING,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBook[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
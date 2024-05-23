import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch Data
export const fetchData = createAsyncThunk("users/fetchData", async (page) => {
  const respone = await fetch(`https://reqres.in/api/users?page=${page}`, {
    cache: "no-cache",
  });
  const user = await respone.json();
  return user;
});

const initialState = {
  users: [],
  error: false,
  loading: true,
  selectUser: [],
};

const Slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectUser = action.payload;
    },
    deleteUser: (state, action) => {
      let isIn = state.users.data.some((el) => el.id === action.payload.id);
      if (isIn) {
        let index = state.users.data.findIndex(
          (el) => el.id == action.payload.id
        );
        state.users.data.splice(index, 1);
      }
    },
    editUsers: (state, action) => {
      let isIn = state.users.data.some((el) => el.id === action.payload.id);
      if (isIn) {
        let index = state.users.data.findIndex(
          (el) => el.id == action.payload.id
        );
        state.users.data.splice(index, 1, action.payload);
      }
    },
    addUsers: (state, action) => {
      var userNew = action.payload;
      state.users.data?.push(userNew);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.users = action.payload;
        state.error = false;
        state.loading = false;
      })
      .addCase(fetchData.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { deleteUser, editUsers, addUsers, selectUser } = Slice.actions;
export default Slice.reducer;

import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    displayName: "hung",
    email: "1@gmail.com",
    photoURL: "1111",
    uid: "01",
    providerId: "1212",
  },
  reducers: {
    update: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
    },
  }
});
export const { update } = userSlice.actions;
export default userSlice.reducer;

import { createSlice, legacy_createStore } from "@reduxjs/toolkit";

const toDoUserSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      
      
    },
    removeUser(state, action) {
      // state.filter((item)=>item!==action.payload);
     return state.filter((i)=>i!==action.payload)
      
    },
    clearAllUser(state, action) {
      return [];
    },
  },
});
export const{addUser,removeUser, clearAllUser}=toDoUserSlice.actions;
export default toDoUserSlice.reducer;

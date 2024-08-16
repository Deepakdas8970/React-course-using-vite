import { configureStore } from "@reduxjs/toolkit";
import  toDoUserSlice  from "./slices/ToDoSlice";

const store = configureStore({
  reducer: {
    users: toDoUserSlice,
  },
});

export default store;

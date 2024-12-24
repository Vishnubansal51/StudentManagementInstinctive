import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./studentsSlice";

const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});

export default store;

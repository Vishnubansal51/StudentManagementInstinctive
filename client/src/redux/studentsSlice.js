


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Backend base URL

// Fetch all students
export const fetchStudents = createAsyncThunk("students/fetchStudents", async () => {
  const response = await axios.get(`${API_BASE_URL}/students`);
  return response.data;
});

// Add a new student
export const addStudent = createAsyncThunk("students/addStudent", async (student) => {
  const response = await axios.post(`${API_BASE_URL}/students`, student);
  return response.data.data; // Backend returns { success, message, data }
});

// Update a student
export const updateStudent = createAsyncThunk("students/updateStudent", async (student) => {
  const response = await axios.put(`${API_BASE_URL}/students/${student.id}`, student);
  return response.data.data; // Backend returns { success, message, data }
});

// Delete a student
export const deleteStudent = createAsyncThunk("students/deleteStudent", async (id) => {
  await axios.delete(`${API_BASE_URL}/students/${id}`);
  return id;
});

// Redux slice
const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.students.findIndex((s) => s.id === action.payload.id);
        if (index !== -1) {
          state.students[index] = action.payload;
        }
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((s) => s.id !== action.payload);
      });
  },
});

export default studentsSlice.reducer;

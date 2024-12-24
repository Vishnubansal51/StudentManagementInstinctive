

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; // TailwindCSS styles
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, addStudent, deleteStudent } from "./redux/studentsSlice";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import StudentTable from "./components/StudentTable";

function App() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);

  // Fetch students on page load
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  // Add a new student
  const handleAddStudent = () => {
    const newStudent = {
      name: "New Student",
      cohort: "AY 2023-24",
      dateJoined: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      status: true,
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
    };
    dispatch(addStudent(newStudent));
  };

  // Delete a student
  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        {/* Navigation Sidebar */}
        <aside className="w-1/5 bg-white shadow-lg">
          <Navigation />
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Main Content with Routes */}
          <main className="p-4 overflow-auto">
            <Routes>
              <Route
                path="/students"
                element={
                  <StudentTable
                    students={students}
                    onDelete={handleDeleteStudent}
                    onAddStudent={handleAddStudent} // Pass handleAddStudent
                  />
                }
              />
              <Route
                path="/"
                element={<h1 className="text-center text-2xl font-semibold">Welcome to the Dashboard</h1>}
              />
              <Route
                path="*"
                element={<h1 className="text-center text-red-500">404: Page Not Found</h1>}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, deleteStudent } from "../redux/studentsSlice";
import StudentTable from "../components/StudentTable";

const Home = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);

  useEffect(() => {
    // Fetch students on page load
    dispatch(fetchStudents());
  }, [dispatch]);



  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div className="p-4">
      <StudentTable students={students} onDelete={handleDeleteStudent} />
      
    </div>
  );
};

export default Home;

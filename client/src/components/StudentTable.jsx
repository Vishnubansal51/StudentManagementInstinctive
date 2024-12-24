
import React, { useState } from "react";
import StatusIndicator from "./StatusIndicator";

const StudentTable = ({ students, onDelete, onAddStudent }) => {
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedCourse, setSelectedCourse] = useState("All Courses");

  // Extract unique years and courses for dropdowns
  const uniqueYears = ["All Years", ...new Set(students.map((student) => student.cohort))];
  const uniqueCourses = [
    "All Courses",
    ...new Set(students.flatMap((student) => student.courses)),
  ];

  // Filter students based on selected year and course
  const filteredStudents = students.filter((student) => {
    const yearMatch = selectedYear === "All Years" || student.cohort === selectedYear;
    const courseMatch =
      selectedCourse === "All Courses" || student.courses.includes(selectedCourse);
    return yearMatch && courseMatch;
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Filters and Add New Student Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          {/* Academic Year Filter */}
          <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-transparent outline-none text-sm text-gray-800 cursor-pointer"
            >
              {uniqueYears.map((year, idx) => (
                <option key={idx} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Course Filter */}
          <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="bg-transparent outline-none text-sm text-gray-800 cursor-pointer"
            >
              {uniqueCourses.map((course, idx) => (
                <option key={idx} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Add New Student Button */}
        <button
          onClick={onAddStudent}
          className="flex items-center gap-2 bg-gray-200 text-green-800 px-4 py-2 rounded-lg "
        >
          <img src="/icons/add-icon.png" alt="Add" className="w-4 h-4" />
          <span className="text-sm font-semibold">Add new Student</span>
        </button>
      </div>

      {/* Student Table */}
      <table className="w-full text-left border-collapse mt-4">
        <thead>
          <tr className="bg-gray-200">
            {["Student Name", "Cohort", "Courses", "Date Joined", "Last Login", "Status", "Actions"].map(
              (head) => (
                <th key={head} className="p-2">
                  {head}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.cohort}</td>
              <td className="p-2 flex gap-2">
                {student.courses.map((course, courseIdx) => (
                  <div
                    key={courseIdx}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg shadow-sm"
                  >
                    <img
                      src={
                        course === "CBSE 9 Science"
                          ? "/icons/science-icon.png"
                          : "/icons/math-icon.png"
                      }
                      alt={course}
                      className="w-5 h-5 rounded-full"
                    />
                    <span className="text-sm font-medium">{course}</span>
                  </div>
                ))}
              </td>
              <td className="p-2">{student.dateJoined}</td>
              <td className="p-2">{student.lastLogin}</td>
              <td className="p-2">
                <StatusIndicator status={student.status} />
              </td>
              <td className="p-2">
                <button
                  onClick={() => onDelete(student.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;

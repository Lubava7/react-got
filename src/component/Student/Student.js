import React from "react";
import "./Student.css";

// на каждый элемент массива вернуть <p> чтобы получлся список

const students = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];
function StudentComp(props) {
  let liStudents = students.map((student) => (
    <li>
      {student.name}, {student.id}, {student.marks}
    </li>
  ));

  return <ul>{liStudents}</ul>;
}

export default StudentComp;

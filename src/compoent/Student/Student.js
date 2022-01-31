import React from "react"
import "./Student.css"



const students = [ 
    {name: 'John', id: 123, marks : 98 }, 
    {name: 'Baba', id: 101, marks : 23 }, 
    {name: 'yaga', id: 200, marks : 45 }, 
    {name: 'Wick', id: 115, marks : 75 } 
    ]
function StudentComp (students){    
const liStudents = students.map((student) => {
    return <li key={student.toString()}>{student}</li>
}); 
  return <ul>{liStudents}</ul>
}




export default StudentComp;
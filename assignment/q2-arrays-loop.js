/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(){
   for (i=0; i< studentList.length; i++)
    console.log (studentList[i]);
}

printStudentNames();

// Ignore the code below this line
 // studentList array and printStudentNames function are exported out 

module.exports = {   
    studentList,          
    printStudentNames
}

/*Note: 
module.exports:

module is a special object available in Node.js that represents the current module.
exports is a property of the module object and is used to export functions, objects, or primitive values from a module.

*/
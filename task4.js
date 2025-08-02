// Task-4
// Count the number of properties.

// Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let studentArray = Object.values(student);
console.log(studentArray.length); // Output: 4

// for(let key in student) {
//     console.log(key + '|' + student[key]); // Output: name, age, city, isStudent
// }
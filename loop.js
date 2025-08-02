// Object in JavaScript
const person = {
    name: "John",
    age: 30,
    profession: "Developer",
    salary: 50000,
    isMarried: false,
    hobbies: ["reading", "gaming", "hiking"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
        touristSpots: ["Statue of Liberty", "Grand Canyon", "Yellowstone"]
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }, 
    'fav places': ["Paris", "New York", "Tokyo"],
    'fav color': "blue",   
}

person.profession = "Senior Developer"; // updating profession value.

// use for in (for looping an object)//
// for(const prop in person) {
//     console.log(prop);
//     console.log(person[prop]); // accessing property using variable
//     console.log(typeof person[prop]); // checking the type of the property value
// }

// for of loop to iterate over values
const keys = Object.keys(person); // getting keys of the object as an array
// console.log(keys); 
//use for - of (for looping an array)
for(const key of keys) {
    // get key and values side by side
    console.log(key, '-', person[key]); // accessing property using variable
}
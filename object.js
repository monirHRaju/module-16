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
person.height = 180; // adding a new property
console.log(person); 

// person.address.touristSpots[1] = 'Watch Tower' // accessing the object
// console.log(person.address.touristSpots[1]);

// updating properties
// person.salary = 30000; // updating salary value.
// person['age'] = 31; // updating age value.
// person.hobbies.push("cooking"); // adding a new hobby.
// const propName = 'profession';
// person[propName] = "Senior Developer"; // updating profession value.


// console.log(person); // accessing property using variable


// const hisHobbies = person.hobbies;
// console.log(hisHobbies);

// accessing properties
// console.log(person.hobbies); //.notation method
// console.log(person['fav places']); // bracket notation method

// const keyName = 'profession';
// console.log(person[keyName]); // accessing property using variable


// getting values
// const values = Object.values(person);
// console.log(values); // This will not work as `values` is not a method of the

// getting keys
// const keys = Object.keys(person);
// console.log(keys); // This will not work as `keys` is not a method of the
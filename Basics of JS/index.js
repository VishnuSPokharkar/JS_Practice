//This is my first app
console.log('Hello World');
let name = 'Vishnu';
console.log(name); 

let firstName = 'Manoj'; // String Literral
let age = 32; // Number Literral
let isApprover = false; // Boolean Literral
let lastName; // Undefined Literal 
let fathersName = undefined; 
let selectedColor = null;  

//Object decleration 
let person = {
    name: 'vishnu',
    age: 27,
    address : 'Pune' 
}

//Accessing the properties with dot(.) Notation 
person.address = 'Changefal';
console.log(person);
console.log(person.name);

//Accessing the properties with Bracket Notation
person['address'] = 'Buldhana';
console.log(person);
console.log(person.address);

//Arrays
let selectedColors = ['Red', 'Blue', 'Yellow'];
console.log(selectedColors);
console.log(selectedColors[2]);
console.log(selectedColors.length);


/*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics.
EVERY EXERCISE SHOULD USE DESTRUCTURING*/


/*1.*/
let arr = [
  ['name', 'jon'],
  ['age', 20],
  ['eyes', 'blue'],
];

//Create an object out of the arr above then using destructuring, declare variables using the object keys.
// const obj = {
//   name: 'jon',
//   age: 20,
//   eyes: 'blue'
// }


// const {
//   n ame,
//   age,
//   eyes
// } = obj;

// would log out an array of arrays
console.log(Object.values(arr))


// console.log(`Hello, my name is ${name}, I am ${age}, and my eyes are ${eyes}`)

2.
let arr2 = [1,2,3,4,5,6]
//a. Set 3 variables names: the third index should be called 'three', the fourth item 'four' and the rest of the items thereafter 'rest'
//b. Swap the third and fourth item variable values
let three = arr2[2];
let four = arr2[3];
let rest =[three, four, ,]
console.log(four)
console.log(three)


console.log([three, four] = [four, three])
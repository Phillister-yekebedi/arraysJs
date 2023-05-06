// Given an array of strings, use a function to reverse all the elements in 
// the string in ascending order and the specific elements in descending order

function reverseInAscendingOrder(strs){
    let str = strs.split().reverse()
}

console.log()



// Given an array of objects, each object representing a person with a name and 
// age property, write a function that returns the sum of all people who are less than 18 years.
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ]
function agesOf(person) {
    let sum = 0;
    for (let i = 0; i < person.length; i++) {
      if (person[i].age < 18) {
        sum += person[i].age;
      }
    }
    return sum;
  }
  
  const person = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  console.log(agesOf(person));



// Using JS functions and an array of numbers, return positive if an element within 
// the array is positive, negative if an element is negative, else zero
function array(arr) {
    let positive = 0;
    for (let y = 0; y < arr.length; y++) {
      if (arr[y] > 0) {
        positive = "positive";
        break;
      } else if (arr[y] < 0) {
        positive = "negative";
        break;
      }
    }
    return positive;
  }
  
  let arrr = [1, 2, 3, 4, 5];
  
  console.log(array(arr1));
 

// Given an array of objects, where each object represents an employee with an id, name, and salary 
// property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
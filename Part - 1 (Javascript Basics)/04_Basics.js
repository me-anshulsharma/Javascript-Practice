// ARRAYS in JS are resizable and can contain a mix of different data types. 
// Creates shallow copy - share reference - changes occurs in original array

// let myArr = [1,2,3,4,5,6,7,8,9,10]
// console.log(myArr);


// let myArr1 = [1,2,3,4,5]
// let myArr2 = [6,7,8,9,10]
// let myArr3 = new Array("A", "B", "C", "D", "E")

// Array methods

// 1. push and pop - add or remove from end of the array

// myArr1.push("New Value")
// myArr1.pop()
// console.log(myArr1);

// 2. unshift and shift - add or remove from start of the array

// myArr1.unshift("New Value")
// console.log(myArr1);
// myArr1.shift()
// console.log(myArr1);

// console.log(myArr1.includes(8));
// console.log(myArr1.indexOf(8));
// console.log(myArr1.indexOf(3));

// console.log(typeof myArr1); // Object type
// const newArr = myArr1.join() // changes the datatype to string - string array with comma separated values
// console.log(typeof newArr);

// slice (gives a partition of array without removing it) v/s splice (removes the part permanently)

// console.log(myArr1)
// console.log(myArr1.slice(0,3)); // 0,1,2 index but not includes last index
// console.log(myArr1)
// console.log(myArr1.slice(1,3));
// console.log(myArr1)
// console.log(myArr1.splice(0,3));
// console.log(myArr1)


let myArr1 = [1,2,3,4,5]
let myArr2 = [6,7,8,9,10]
let myArr3 = new Array("A", "B", "C", "D", "E")

// myArr1.push(myArr2)
// console.log(myArr1); // wrong way to merge arrays, instead use ... "spread operator"

// myArr1.push(...myArr2, ...myArr3)
// console.log(myArr1)

// let newArr = [1,2,3,[4,5,6],[7,[8,9,[10,11,12,13]]]]
// const realNewArr = newArr.flat() // Provide deapth can use infinity also
// console.log(realNewArr);

// console.log(Array.from("Anshul"));

// let score1 = 100
// let score2 = 200
// let score3 = 300

// let MyNewArray = Array.of(score1, score2, score3)
// console.log(MyNewArray);

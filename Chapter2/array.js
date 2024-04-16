const fruits = ['kiwi','mango'];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3


fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

//sort
var a = [1,2 ,3,4,11]
console.log(a.sort((a,b)=>a-b));

//at
console.log(fruits.at(1))

//push and pop

fruits.push('papaya');
console.log(fruits.pop());

//loops

let arr = ["Apple", "Orange", "Pear"];

//for loop
for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}

//for of loop
for (let fruit of arr) {
  console.log( fruit );
}

//for in loop

for (let key in arr) {
  console.log( arr[key] ); 
}

//splice

let numArr = [20, 30, 40, 50];


// Delete 3 elements starting from index 1
numArr.splice(1, 3);

// Insert 80, 90, 100 at starting index 1
numArr.splice(1, 0, 3, 4, 5);

console.log(numArr);


// Declare and initialize array
let strArr = ["amit", "sumit", "anil"];

// Delete two elements starting from index 1
// and add three elements.
strArr.splice(1, 1, "Geeks", "Geeks1", "Geeks2");

console.log(strArr);

console.log("Testing assignment question")
const test1 = [1,2,3];
console.log(test1);

const test2 = new Array(10,20,30);
console.log(test2);

const test3 = Array(100,200,300);
console.log(test3);

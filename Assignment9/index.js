// Question 1: Variable Scope – var, let, const
function demoVariableScopes() {
  if (true) {
    var x = "I am var"; // Function scoped
  }
  console.log("Inside demoVariableScopes – x (var):", x);

  if (true) {
    let y = "I am let"; // Block scoped
    console.log("Inside demoVariableScopes – y (let):", y);
  }

  if (true) {
    const z = "I am const"; // Block scoped
    console.log("Inside demoVariableScopes – z (const):", z);
  }
}

demoVariableScopes();
console.log("Question 1: demoVariableScopes() executed.\n");


// Question 2: Return Second Fruit
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

function getSecondFruit(arr) {
  return arr[1]; // Index starts from 0
}

console.log("Question 2: Second fruit is", getSecondFruit(fruits), "\n");


// Question 3: Push and Pop Operations
function pushThenPop(arr, newElement) {
  arr.push(newElement);
  arr.pop();
  return arr;
}

const sampleArr3 = [1, 2, 3];
console.log("Question 3: After pushThenPop:", pushThenPop(sampleArr3, 999), "\n");


// Question 4: Square Numbers using map()
function squareNumbers(arr) {
  return arr.map((num) => num * num);
}

const nums4 = [2, 4, 6, 8];
console.log("Question 4: Squared numbers:", squareNumbers(nums4), "\n");


// Question 5: Filter Odd Numbers using filter()
function filterOddNumbers(arr) {
  return arr.filter((n) => n % 2 !== 0);
}

const nums5 = [1, 2, 3, 4, 5, 6, 7];
console.log("Question 5: Odd numbers:", filterOddNumbers(nums5), "\n");


// Question 6: Greet Person using object properties
const person = {
  name: "Alice",
  age: 30,
  occupation: "Software Developer",
};

function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}. I am ${p.age} years old and I work as a ${p.occupation}.`);
}

console.log("Question 6:");
greetPerson(person);
console.log("");


// Question 7: Calculate Rectangle Area
function calculateArea(dimensions) {
  return dimensions.width * dimensions.height;
}

const rect7 = { width: 5, height: 10 };
console.log("Question 7: Rectangle area is", calculateArea(rect7), "\n");


// Question 8: Get Object Keys using Object.keys()
function getObjectKeys(obj) {
  return Object.keys(obj);
}

const sampleObj8 = { color: "red", size: "medium", quantity: 42 };
console.log("Question 8: Object keys are", getObjectKeys(sampleObj8), "\n");


// Question 9: Merge Two Objects using Object.assign()
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const a9 = { name: "Bob", age: 25 };
const b9 = { occupation: "Designer", age: 26 }; // age will be overwritten
console.log("Question 9: Merged object is", mergeObjects(a9, b9), "\n");


// Question 10: Sum of Array using reduce()
function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const nums10 = [5, 10, 15, 20];
console.log("Question 10: Sum of array is", sumArray(nums10), "\n");

// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// let res = sum(null);
// console.log(res);

try {
  let res = sum(null);
  console.log(res)
} catch (error) {
  console.error(error.message)
}

// 2.
// tests
sayName("Alex");
// sayName(1);
try {
  sayName(1);
} catch(error) {
  console.error(error.message);
}
// Your code here

function sayName(name) {
  if (typeof name === 'string') {
    console.log(name);
  } else {
    throw TypeError('Invalid name! Must be a string');
  }
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

/********** */
try {
  greet();
} catch(error) {
  console.log('Hello World!');
}

//Data Types

//What is the output of each of the expressions below?
typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: number
// Actual:number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean


"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: undefined
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: NaN
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN

//Data Structures
//Arrays

//Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...

var numbers = [2, 4, 6, 8]

// Add an element to the back of an array.
console.log(numbers.push(10));

//Remove an element from the back of an array.
console.log(numbers.pop());

//Add an element to the front of an array.
console.log(numbers.unshift(0));

//Remove an element from the front of an array.
console.log(numbers.shift());

//Concatenates all the elements in an array into a string.
console.log(numbers.join());

//Separates the characters of a string into an array. This one is a string method.
var numbersJoin = numbers.join();
numbersJoin.split(" ");


//What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.
var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)
console.log(numbers);

//Objects
var phoneBook = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
};

// Write a line of code that accesses the phone number for Pam.
console.log(phoneBook["Pam"]);

// Write a line of code that creates a new record for John at 435-567-1223.
phoneBook["John"] = "435-567-1223"
console.log(phoneBook);

// Write your own object and console.log that value.
var age = {
    "Colin": 26,
    "Jacob": 31,
    "Jane": 19
};
console.log(age["Jacob"]);

// Find out what Object.keys(phoneBook) does.
console.log(Object.keys(phoneBook));

// Look up and use the delete keyword with phoneBook to delete a record.
delete phoneBook["Zed"];
console.log(phoneBook);
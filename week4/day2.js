/*
 How do we assign a value to a variable? A with the assign operator
 How do we change the value of a variable? selecting th value and typing new 
How do we assign an existing variable to a new variable? usinh assignment operators
Remind me, what are declare, assign, and define? creating a varible with let is declaring,value given is assiging
What is pseudocoding and why should you do it?sometimes used as a detailed step in the process of developing a program,its detail, templete of design
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?its 75% and 25%

 */
// String
let firstVariable = "Hello world";
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = "welcome to Java Class";
console.log(firstVariable);
let yourname = "Leena";
console.log(`Hello,my name is ${yourname}`);

// Boolean
// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false __ false __ false __ false __ false __ true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a __ b ___ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 != '48');

// The farm

let animal = "cow";
if (animal === "cow") {
  console.log(`moooooo`);
} else {
  console.log(`Hey! You are not a Cow.`);
}

// Driver's Ed

let personAge = 20;
if (personAge >= 16) {
  console.log(`Here are the Keys`);
} else {
  console.log(`Sorry,you are too young`);
}

// Lopps

// The basics

for (let i = 0; i < 11; i++) {
  console.log(i);
}

for (let n = 10; n < 401; n++) {
  console.log(n);
}

for (let a = 12; a <= 4000; a += 3) {
  console.log(a);
}

// Get Even

let c = 1;
while (c <= 100) {
  console.log(c);
  if (c % 2 === 0) {
    console.log(c + `is an even number`);
  }
  c++;
}
c++;

//give me five

// let f = 1;
// while(f<=100){
//     if (f%5==0){
//         console.log(`I found a `+(f) `.High five!`)
//         }
//           f+=5
// }

// for (let f=0;f<=100;f+=5){
//     console.log(`I found a `+(f) +`.High five!`)

// }

let g = 1;
while (g <= 100) {
  if (g % 5 === 0) {
    console.log(`I found a ` + g + `.High five!`);
  } else if (g % 3 === 0) {
    console.log(g + ` Three is a Crowd`);
  }
  // else{
  //     console.log(g)
  // }
  g++;
}

// Savings Account
// let sum =0;
// for( b=0;b<=10;b++){
//  sum+=b;
// }
//  let bank_accunt=sum
// console.log(bank_accunt)

let num = 0;
for (b = 0; b <= 100; b++) {
  num += b;
}

let bank_accunt = num * 2;
console.log(bank_accunt);

// Array & Controls Flow

// A. Talk about it:
// What are the things in an array called?     --------collection of Elements
// Do Arrays guarantee those things will be in order?....No
// What real-life thing could you model with an array?...Phone,Address,Employee Data

// Easy Does it

// Create an array that contains three quotes and store it in a variable called quotes

const quotes = ["potential", "Power", "Position"];
console.log(quotes);

// C. Accessing elements

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2] = "Hello to World";
console.log(randomThings);

//D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);
ourClass[4] = "Octocat";
ourClass.push("Cloud city");
console.log(ourClass);

//Mix it up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon", "Pentagon");
const firstElement = myArray.shift();
console.log(myArray);
myArray.unshift("Bob marley");
myArray.pop();
console.log(myArray);
console.log("myArray:", myArray);
const reversed = myArray.reverse();
console.log("reversed:", reversed);

//F. Biggie Smalls

// let h= 0
// while (h=110){
//     if (h<100){
// console.log("little number")
// }
// else {
//     console.log("big number");
// }

//     h++;
//         }
//         console.log(h)

// g monkey in the middle

const fb = [];
let number = 0;
while (number <= 15) {
  if (number < 5) {
    fb.push("little number");
  } else if (number > 5) {
    fb.push("big number");
  } else {
    fb.push("monkey");
  }
  number++;
}
console.log(fb);

// functions

function printGreeting(name) {
  name = "slimer";
  return `Hello there ${name}`;
}
console.log(printGreeting());

function printCool(name) {
  name = "Captain Reynols";
  return `${name} is cool`;
}
console.log(printCool());

function calculateCube(number) {
  return (number = number * 25);
}
console.log(calculateCube(5));
//
// function isVowel(letter){
//  let vowels = ["a","e","i","o","u"]
//  for (let v=0;v<vowels.length;v++){
//     if(vowels[v] === letter.toLowerCase()) {
//         return true;
//     }else{
//         return false;
//     }
//  }
// }
//  console.log(isVowel("E"))

function getTwolength(a, b) {
  return [a.length, b.length];
}
console.log(getTwolength("Hank", "Hippopopalous"));

function getMultipleLengths(arrayofstrings) {
  let arr = [];
  for (let ar = 0; ar < arrayofstrings.length; ar++) {
    arr.push(arrayofstrings[ar].length);
  }
  return [arr];
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

function maxofThree(sum1, sum2, sum3) {
  if (sum1 >= sum2 && sum1 >= sum3) {
    return `${sum1} is a larger value`;
  } else if (sum2 >= sum1 && sum2 >= sum3) {
    return `${sum2} is a larger number`;
  } else {
    return `${sum3} is larger number`;
  }
}
console.log(maxofThree(6, 9, 1));

// printLongestWord

// function  printLongestWord(arrayofstrings){
//     let longest = "";

//     for(let l=0;l<arrayofstrings.length;l++){
//         if (arrayofstrings(l).length>longest.length){
//          longest=arrayofstrings(l)
//         }
//       return longest;
//     }
//     console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// }

// objects

// const user = {
//   name1: "Leena",
//   age: 30,
//   email: "leena@gmail.com",
//   purchased: [],
// }
// user.email = "leenamehta@gmail.com";
// user.age = age++;
// user.location = "Pittsburgh";
// user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
// let p =0 ;
// for(p=0;p<purchased.length;p++){
//     return purchased.length(p);
// }
// console.log(user.purchased[2]);
// console.log(user.purchased[p]);

// function updateUser() {
//   user.age++;
//   user.name1 = name1.toUppercase();
// }

//updateuser();
//console.log(user)

function oldAndLoud(person){
person.name1=person.name1.toUppercase();
person.age++
}


//E object with in object

// user.friend = {
//     name: "jo",
//     age :30,
//     email : "jo@gmail.com",
//     purchased : [],
//     location:"Pittsburgh"
// }
// console.log(user.friend.name1)
// console.log(user.friend.location)
// user.friend.age=55
// user.friend.purchased.push("The One Ring", "A latte",)
// let fp =0 ;
// for(fp=0;p<purchased.length;fp++){
//     return purchased.length(fp);
// }
// // console.log(user.friend.printGreeting[1])
// console.log(user.purchased[fp])


//Cat Combinators

const cat1 = {
    name : "joe",
    breed : "American",
    age : 10,
}

console.log(cat1.age)
console.log(cat1.breed)


const cat2 = {
    name : "zorro",
    breed : "American",
    age : 11,
}

function combineCats(mama,papa){
    cat1=mama;
    cat2=papa;
    }
    console.log(combineCats.mama.name())
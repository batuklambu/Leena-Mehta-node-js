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

 //F.Biggies Smalls

 let num = 99 ;
 if(num <100){
   console.log("little number")
 }
  else  {
    console.log("Big number")
  }

 
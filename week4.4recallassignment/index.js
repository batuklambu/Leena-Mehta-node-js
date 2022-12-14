class Hamster {
    constructor(name, owner = "", price = 15) {
      this.name = name;
      this.owner = owner;
      this.price = price;
    }
  
    wheelRun() {
      console.log(`log "squeak squeak"`);
    }
  
    eatFood() {
      console.log(`nibble nibble`);
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.mood = mood;
      this.hamsters = hamsters;
      this.bankAccount = bankAccount;
    }
  
    getName() {
      return this.name;
    }
  
    getAge(num) {
      return this.age;
    }
  
    getWeight() {
      return this.weight;
    }
  
    greet() {
      console.log(`Hi ${this.name},How r u doing!`);
    }
  
    eat(num) {
      this.weight += num;
      this.mood += num;
    }
  
    excercise(num) {
      return (this.weight -= num);
    }
  
    ageUp(num) {
      this.age += num;
      this.height += num;
      this.weight += num;
      this.mood -= num;
      this.bankAccount += 10;
    }
  
    getPrice() {
      return ``;
    }
  
    buyHamster(hamster) {
      if (this.bankAccount >= hamster.getPrice()) {
        this.bankAccount -= hamster.getPrice();
        this.hamsters.push(hamster);
        this.mood += num;
        return `You bought the hamster.`;
      } else return `You don't have enough money.`;
    }
  }
  let timmy = new Person("Timmy", 0, 0, 0, 0, [], 0);
  timmy.age = 5;
  timmy.eat(5);
  timmy.excercise(5);
  console.log(timmy); // calling timmy
  timmy.age = 9;
  console.log(timmy); // calling timmy after new age declared
  //console.log(timmy.eat());  // calling eat method
  //console.log(timmy.bankAccount);
  let gus = new Hamster("Gus");
  console.log(gus);
  gus.owner = "Timmy";
  console.log(gus); //callimg gus
  console.log(timmy.buyHamster(gus));
  timmy.age = 15;
  timmy.eat(2);
  timmy.excercise(2);
  console.log(timmy); // calling after new age define
  console.log(timmy.bankAccount);
  console.log(timmy.weight)
  
  class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  class Chef extends Dinner {
    constructor(appetizer, entree, dessert) {
      super(appetizer, entree, dessert);
    }
  
    // newDinner(){
    //     if (this.entree ==="Pasta"){
    //       console.log(dinner1)
    //     }
    //     if (this.entree==="Fried Rice") {
    //         console.log(dinner2);
  
    //     } else {
    //         console.log(dinner3)
  
    //     }
    //     }
  
    newDinner() {
      return ` Dinner of the Evening is ${this.appetizer}, ${this.entree}, ${this.dessert}.`;
    }
  }
  const chef = new Chef();
  const dinner1 = new Chef("Soup", "Pasta", "Cheese Cake");
  const dinner2 = new Chef("Soup", "Fried Rice", "chocolate souffle");
  const dinner3 = new Chef("Spring Rolls", "Noodles", "Ice cream");
  
  console.log(dinner1.newDinner());
  console.log(dinner2.newDinner());
  console.log(dinner3.newDinner());
  console.log(dinner1,dinner2,dinner3)

  
  //  I. Variables & Datatypes

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



//Boolean
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false === false === false=== false ===false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a < b > c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a === a < d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 != '48');

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
  
  let f = 1;
  while(f<=100){
      if (f%5==0){
          console.log(`I found a `+(f) `.High five!`)
          }
            f+=5
  }
  
  for (let f=0;f<=100;f+=5){
      console.log(`I found a `+(f) +`.High five!`)
  
  }
  
  let g = 1;
  while (g <= 100) {
    if (g % 5 === 0) {
      console.log(`I found a ` + g + `.High five!`);
    } else if (g % 3 === 0) {
      console.log(g + ` Three is a Crowd`);
    }
     else{
         console.log(g)
     }
    g++;
  }
  
//   //Savings Account
  let sum =0;
  for( b=0;b<=10;b++){
   sum+=b;
  }
  //  let bank_accunt=sum
  // console.log(bank_accunt)
  
  // let num = 0;
  // for (b = 0; b <= 100; b++) {
  //   num += b;
  // }
  
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

  const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log(`Kristyn is rocking that ` +kristynsCloset[2]  + ` today!`)
  kristynsCloset.splice(5,0,'raybans')
  kristynsCloset.splice(4,1,'strain knit hat')
  console.log(thomsCloset[0][0]);
  console.log(thomsCloset[1][0]);
  console.log(thomsCloset[2][2]);
  console.log(`Thom is looking fierce in a`+ thomsCloset([0][0]) +thomsCloset([1][0])+thomsCloset([2][2]) `!`)
  console.log(thomsCloset[1][2])
  thomsCloset[1][2]="Footie Pajamas"

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
  
  // function isVowel(letter){
  //  let vowels = ["a","e","i","o","u"]
  //  return vowels.includes(letter.toLowerCase());
  //  for (let v=0;v<vowels.length;v++){
  //     if(vowels[v] === letter.toLowerCase()) {
  //         return true;
  //     }else{
  //         return false;
  //     }
  //  }
  // }
  //  console.log(isVowel("E"))

  function isVowel(letter){
   let vowels = ["a","e","i","o","u"]
    let output = false;
   for (let v=0;v<vowels.length;v++){
      if(vowels[v] === letter.toLowerCase()) {
          return output =false;
      } else{
        return output= true;
      }
        }
        return output
  }
   console.log(isVowel("E"))
 
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
  
  printLongestWord
  
  function  printLongestWord(arrayofstrings){
      let longest = ""
  
      for(let l=0;l<arrayofstrings.length;l++){
          if (arrayofstrings[l].length>longest.length){
           longest=arrayofstrings[l]
          }
        
      }
      return longest;
    }
      console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

      
 
// objects

let user = {
    name: "Leena",
    age: 30,
    email: "leena@gmail.com",
    purchased: [],
  };
  
  //b Update the user
  
  user.email = "leenamehta@gmail.com";
  user.age = user.age++;
  
  // c Adding keys and values
  user.location = "Pittsburgh";
  
  //d Shopaholic
  user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
  console.log(user.purchased[2])
  
  // e object-within Object
  
  user.friend = {
    name: "jo",
    age: 30,
    email: "jo@gmail.com",
    purchased: [],
    location: "Pittsburgh",
  }
   console.log(user.friend.name);
  console.log(user.friend.location);
  user.friend.age = 55;
  user.friend.purchased.push("The One Ring", "A latte");
  console.log(user.friend.purchased[1])
  
  //f loops 
  
  for (let p = 0; p < user.purchased.length; p++) {
    console.log(user.purchased[p]);
   }
  
  let fp = 0;
   for (fp = 0; fp < user.friend.purchased.length; fp++) {
  console.log( user.purchased[fp]);
   }
  
  
  
  function updateUser() {
    user.age++;
    user.name = user.name.toUpperCase();
  }
  
  // console.log(user.updateUser());
  
  function oldAndLoud(person) {
    person.name = person.name.toUpperCase();
    person.age++;
  }
  
  oldAndLoud(user);
  console.log(user)


  const cat1 = {
    name: "joe",
    age: 19,
    breed: "Mog",
  }
  console.log(cat1.age);
  console.log(cat1.breed);
  const cat2 = {
    name: "Jam",
    age: 45,
    breed: "Siamese",  
  }
  function combineCats(mama,papa) {
    return {
     name: mama.name + papa.name,
      age: 1,
      breed: mama.breed + "-" + papa.breed,
    }
  }
  
  console.log(combineCats(cat1, cat2));
  console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
   console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))   )
   )
  
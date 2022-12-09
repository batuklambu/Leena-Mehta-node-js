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
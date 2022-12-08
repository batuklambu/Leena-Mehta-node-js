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
    return ` Dinner of the Evening is ${this.appetizer} ${this.entree} ${this.dessert}.`;
  }
}
const chef = new Chef();
const dinner1 = new Chef("Soup", "Pasta", "Cheese Cake");
const dinner2 = new Chef("Soup", "Fried Rice", "chocolate souffle");
const dinner3 = new Chef("Spring Rolls", "Noodles", "Ice cream");

console.log(dinner1.newDinner());
console.log(dinner2.newDinner());
console.log(dinner3.newDinner());

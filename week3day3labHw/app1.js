class Person {
  constructor(name, age, sex, hairColor) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hairColor = hairColor;
  }
  getdescription() {
    return `${this.name} is woring in Postal Department`;
  }

  isfemale() {
    if (this.name === "Jenny K.") {
      console.log("She is my female employee friend");
    } else {
      console.log("He is male Employee");
    }
  }

  setHair(hairColor) {
    this.hair = hairColor;
  }
}
const fredo = new Person("Fredo", 40, "Male", "Brown");
console.log(fredo);
console.log(fredo.getdescription("fredo"));
console.log(fredo.isfemale("fredo"));
// console.log(fredo.setHair("red"))

class PostalWorker extends Person {
  constructor(name, age, sex, hairColor) {
    super(name, age, sex, hairColor);
    this.skills = ["Knowlegeble", "Super quick"];
  }

  designation() {
    console.log("Jim is super quick Manager");
  }
  getdescription1() {
    return `${this.name} is working in Postal Department`;
  }

  alliance() {
    super.getdescription();
    this.designation();
  }
}
const jim = new PostalWorker("Jim", 25, "Male", "Black");
const jenny = new PostalWorker("Jenny", 27, "female", "Brown");
console.log(jim);
console.log(jenny);
console.log(jenny.getdescription1());
console.log(jim.alliance());

class Chef extends Person {
  constructor(name, age, sex, hairColor) {
    super(name, age, sex, hairColor);
  }

  setreastaurant() {
    if (this.name === "Albert") {
      console.log("Albert is Chef in Mediterranean restaurant ");
    } else {
      console.log("Bob is Chef in Mexican Restaurant");
    }
  }

  michelin() {
    return `${this.name} is michelin chef in New York`;
  }

  dualwork() {
    return `${this.name} is working as Postal Worker as well as Chef`;
  }
}

const albert = new Chef("Albert", 28, "Male", "Blue");
const bob = new Chef("Bob", 35, "Male", "Grey");
console.log(albert);
console.log(bob);
console.log(albert.michelin());
console.log(bob.dualwork());
console.log(albert.setreastaurant());

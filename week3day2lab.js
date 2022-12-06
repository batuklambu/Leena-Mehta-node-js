class Cat {

   constructor(name, age, color, breed,) {
     this.name = name;
     this.age = age;
     this.color = color;
     this.breed = breed
   }
   // Methods
 
   getDescription() {
     return `name ${this.name},age ${this.age},color${this.color},breed${this.breed}`
   }
 
   toString() {
     return `${this.name}'is a fastest'${this.breed}.`;
   }
 
   setDisplay() {
     console.log(`Hello, my name is ${this.name} kitty and I am ${this.color} ${this.breed} `);
   }
 }
 
 const Sammy = new Cat('Sammy', 8, 'Black', 'American Cat')
 const Jo = new Cat('Jo', 6, 'White', 'Persian Cat')
 console.log(Jo);
 console.log(Sammy);
 console.log(Sammy.getDescription());
 console.log(Sammy.setDisplay());
 console.log(Jo.toString());

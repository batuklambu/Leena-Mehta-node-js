// // Easy Going 

for (let n=0;n<=20;n++){
    console.log(n)
}

// // getEven

for (let i =0;i<=200;i++){
        if (i%2===0){
            console.log("This is even Number")
        }
        else{
            console.log("Its odd Number")
        }

}

// // Fizz Buzz
const fb=[]
let number=1
while(number<=100){
    if (number % 3 === 0 && number % 5 === 0){
        fb.push("Fizzbuzz");
}
else if ( number % 3 === 0)
{
  fb.push("Fizz");
}
else if ( number % 5 === 0 )
{
  fb.push("Buzz");
}   
    else {
        fb.push(number)
    }
     number++;
 
}
      console.log(fb);

// //wild wilde Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]=5001
wolfy[3]="Gotham City"
dart.push("Hawkins")
wolfy.splice(0,1,"Gameboy")   
console.log(plantee)
console.log(wolfy)
console.log(dart)

//Yell at the Ninja Turtles

// const ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]



//  function looptoUpper(ninja){
//     var newNinja = [];
//     for (var i = 0; i < ninja.length; i++){
//         newNinja.push(ninja[i].toUpperCase());
//     }
//     return newNinja;
// }
// looptoUpper(["Donatello", "Leonardo", "Raphael", "Michaelangelo"]);

const ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };
// ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
ninja.myUcase();    //console.log
console.log(ninja)

//Method Revisited 
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));
// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted
//permanently alter the data
console.log(favMovies.pop());                 //2 Use the method pop
favMovies.push("Guardians of the Galaxy")     //3 push"Guardians of the Galaxy"
console.log('favMovies:', favMovies);         //4 Reverse the array
const reversed = favMovies.reverse();
console.log('reversed:', reversed);
console.log('favMovies:', favMovies);
const firstElement = favMovies.shift();           //5 Use the shiftmethod
console.log(favMovies);
console.log(firstElement)
//unshift- what does it return? The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(favMovies.indexOf("Django Unchained")); // 7 splice"Django Unchained" and add "Avatar" 
favMovies.splice(14, 1, 'Avatar');
console.log(favMovies.indexOf("Avatar"));
console.log(favMovies.length)  //8 -10slicethe last half of the array
console.log(favMovies.slice(9, 18));//8-10
console.log(favMovies.indexOf("Fast and Furious")); //11 value do we get when we look for the index of something that is not in the array
//Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?


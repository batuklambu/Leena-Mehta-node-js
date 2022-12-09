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

/*
Write a function called same, which accepts two arrays. The function should return true if every 
value in the array has it's corresponding value squared in the second array. The frequency of values 
must be the same.
*/
function same(arr1, arr2){
if(!arr1 || !arr2) return false;
if(arr1.length !== arr2.length) return false;

const lookup ={}

  for (value of arr1) {
lookup[value * value] = (lookup[value*value]=0)+1
    
}
    
for (secondValue of arr2){
    i`f (!lookup[secondValue]) return false;
      lookup[secondValue] -= 1;
}
   return true
}
  
console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency


function validAnagram(arr1, arr2){
    if(!arr1 || !arr2) return false;
    if(arr1.length !== arr2.length) return false;
    
    const lookup ={}
    
      for (value of arr1) {
    lookup[value] ? (lookup[value])=1 : lookup[value]=1
        
    }
        
    for (secondValue of arr2){
        if (!lookup[secondValue]) return false;
          lookup[secondValue] -= 1;
    }
       return true
    }

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true

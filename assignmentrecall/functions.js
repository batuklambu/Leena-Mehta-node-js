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

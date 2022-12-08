function minusOne(num){
    return num -= 1;
}
minusOne(10); // 9
minusOne(100); // 99
minusOne(Infinity);




function makeSentence(a, b, c){
   a = 'I';
   b = ' want';
   c = ' chimichangas'
    return a + b + c
    
}
makeSentence()
console.log("Oh boy, do " + makeSentence() + " or what?")


function makeSentence(a, b, c){
    a = 'I';
    b = ' want';
    c = ' chimichangas';
     return a + b + c
     
 }
 //makeSentence()
 console.log("Oh boy, do " + makeSentence() + " or what?")

 
function getLastElement(arr) {
    lastElement = arr[arr.length - 1]
    return lastElement
    
}
console.log(getLastElement([1, 2, 3, 4, 5, 6])); 
console.log(getLastElement(["a", "b", "c"])); 
console.log(getLastElement([
  [1, 2, 3],
  [4, 5, 6],
]));

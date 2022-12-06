let i=10;
while(i<=90){
    console.log(i)
    i=i+20;
}

console.log("-------------------------")
 i=20;
while(i<=100){
    console.log(i)
    i=i+20;
}
console.log("-------------------------")
// Keep printing integers in multiples of 3 as long as integers are less than 35 using a while loop
i=0
while(i<=35){
    console.log(i)
    i=i+3
}
console.log("-------------------------")
i=0
while(i<=100){
    console.log(i)
    i=i+5
}

console.log("-------------------------")
// Using a while loop, print out all prime numbers between 0 - 20
//  
i=1
while(i<=20){
  n=0;number=2;
  while(number<=i/2){
    if(i%number==0){
      n++;
      break;}
    number++;}
  if (n==0 && i!=1){
    console.log(i +"");}
  i++}

  console.log("-------------------------")

const fb = [];
// ADD CODE HERE
let number = 1;
for (number = 1;number <=16;number++){
  if (number % 3 === 0 && number % 5 === 0){
  			fb.push("fizzbuzz");
  }
      else if ( number % 3 === 0)
      {
        fb.push("fizz");
      }
     else if ( number % 5 === 0 ){
        fb.push("buzz");
     }      
				else {
        fb.push(number); 
      }
   		
       
  }
			console.log(fb);

  

 




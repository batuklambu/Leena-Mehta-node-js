//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"));
//console.log(whereIsWaldo.indexOf("Eggbert"));
 whereIsWaldo.splice(1,1)  //Remove Eggbert
console.log(whereIsWaldo)
whereIsWaldo[1][2]="No one"; //Change Neff to "No one"
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])

// //Excited Kitten

// for (i=0;i<=20;i++){
//     console.log("Love me, pet me! HSSSSSS!")     //write code 20times
// }
// i++;


const  quotes = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..." ];
let kitty = 0 ;
for (let i =0 ; i <= 20 ; i++)
{
  if (i % 2 == 0){
    kitty =  Math.floor(Math.random() * 3) ;
    console.log (quotes[kitty]);
    }
    else 
        console.log ( "Love me, pet me! HSSSSSS!");
}

// Find the Median
// Expected output:
// => 15

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
console.log(nums.sort());
// arr[(arr. length)/2] +arr[((arr. length)/2)+1].

let calmedian= function(arr){
    arr.sort();
let median = 0;
let length = arr.length;
     if(arr.length %2 !=0)
median = arr[Math.floor(length/2)];
else
    median = (arr[length/2]+arr[(length/2)-1]) / 2
    return median;
}
console.log(calmedian(nums));

//Return to the closet

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//  console.log(kristynsCloset.slice(1))
// const kristynsShoe = kristynsCloset.shift();
// thomsCloset[2].push(kristynsShoe)
// console.log(thomsCloset)

// const Kristynoutfit = kristynsCloset.toString().split(",");
// console.log(Kristynoutfit)
// const kristynsfinaloutfit=(Kristynoutfit[2]+","+Kristynoutfit[3]+","+Kristynoutfit[4]);
// console.log(kristynsfinaloutfit,"ppppppp");


let kristynOutfit=[]
let thomasOutfit=[] 

for (let i=0; i<3; i++) {
     let kristyRandom = Math.floor (Math.random()*6)
     kristynOutfit.push(kristynsCloset[kristyRandom]);
}
for (let i=0;i<3;i++){
    let thomasOutfitRandom=Math.floor(Math.random()*thomsCloset[i].length)
    thomasOutfit.push(thomsCloset[thomasOutfitRandom]);
}

 console.log(`Today Kristyn is rocking in ` +kristynOutfit[2]+` `  +kristynOutfit[0]+` ` +kristynOutfit[1]+`.`)
 console.log(`Today Thomas is rocking in ` +thomasOutfit[2]+` `  +thomasOutfit[0]+` ` +thomasOutfit[1]+`.`)

 //dirty Laundry

 for (const item of kristynsCloset) {
    console.log(`WHIRR: Now washing ${item}`);
 }

 //inventory

 for (let i =0;i<thomsCloset.length;i++){
    for(let a=0;a<thomsCloset[i].length;a++){
        console.log(`thomas has "${thomsCloset[i][a]}" in his closet`)
    }

} 


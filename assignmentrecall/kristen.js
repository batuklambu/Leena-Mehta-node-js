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

  console.log(`Kristyn is rocking that ` +kristynsCloset[2]  + ` today!`)
  kristynsCloset.splice(5,0,'raybans')
  kristynsCloset.splice(4,1,'strain knit hat')
  console.log(thomsCloset[0][0]);
  console.log(thomsCloset[1][0]);
  console.log(thomsCloset[2][2]);
  console.log(`Thom is looking fierce in a`+ thomsCloset([0][0]) +thomsCloset([1][0])+thomsCloset([2][2]) `!`)
  console.log(thomsCloset[1][2])
  thomsCloset[1][2]="Footie Pajamas"

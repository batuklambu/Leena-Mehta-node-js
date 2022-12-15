// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
//Task 1s
let mainE1= document.querySelector("main");
mainE1.style.backgroundColor="var(--main-bg)";
mainE1.innerHTML='<h1>SEI Rocks!</h1>';
mainE1.classList.add( 'flex-ctr');

//Task 2
let topMenuE1=document.getElementById("top-menu");
topMenuE1.style.height = '100%';
topMenuE1.style.backgroundColor="var(--top-menu-bg)";
topMenuE1.classList.add('flex-around');

// Task 3 
for(let i in menuLinks){
let a=document.createElement('a')
a.setAttribute('href','menuLinks[i].href');
a.textContent=menuLinks[i].text;
topMenuE1.appendChild(a);

}



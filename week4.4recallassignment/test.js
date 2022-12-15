
function inputverifyer(minimum,maximum){
minimum = 5;
maximum=10;

    return function verify(inputValue){
        if(inputValue<minimum) {
            return ""
        }   
        else if(inputValue<minimum ){
            return"r"
        }
        else if(inputValue>maximum){
            return "or"
        }
   }




     
}
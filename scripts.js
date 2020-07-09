let heading = document.getElementsByTagName("h1");
let userChoice = document.getElementsByTagName("select");

/* change heading to selected month */
 userChoice[0].onchange = function(){
     heading[0].textContent = userChoice[0].value;
 }
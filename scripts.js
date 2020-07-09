let heading = document.getElementsByTagName("h1");
let userChoice = document.getElementsByTagName("select");
let daysBoxes = document.querySelector(".days")
const months31 = ['January', 'March', 'May', 'July', 'August', 'October', 'Decemenber'];
const months30 = ['November', 'April', 'June', 'September'];
const months28 = ['February'];


/* turn off the days display at first */
daysBoxes.style.display = "none"

/* change heading to selected month */
 userChoice[0].onchange = function(){
     heading[0].textContent = userChoice[0].value;

    /* selectively display day boxes */
    if (userChoice[0].value === months28[0]){
        daysBoxes.style.display = "none";
        display28();
    } else {
        for(let ii = 0; ii < months31.length; ii++){
            if(userChoice[0].value === months31[ii]){
                daysBoxes.style.display = "none"
                display31();
                break;
            }
        }
        for(let ii = 0; ii < months30.length; ii++){
            if(userChoice[0].value === months30[ii]){
                daysBoxes.style.display = "none"
                display30();
            }
        }
    }
 }

 function display30(){
    daysBoxes.style.display = "block";
    let novMonths = document.querySelectorAll(".nov");
    for (let nn = 0; nn < novMonths.length; nn++){
        novMonths[nn].style.display = "block";
    }
    document.querySelectorAll("li")[30].style.display = "none";
 }
 function display31(){
    daysBoxes.style.display = "block";
    let novMonths = document.querySelectorAll(".nov");
    for (let nn = 0; nn < novMonths.length; nn++){
        novMonths[nn].style.display = "block";
    }
 }
 function display28(){
    daysBoxes.style.display = "block";
    let novMonths = document.querySelectorAll(".nov");
    for (let nn = 0; nn < novMonths.length; nn++){
        novMonths[nn].style.display = "none";
    }
 }


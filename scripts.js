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
        daysBoxes.style.display = "block";
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
    document.querySelectorAll("li")[30].style.display = "none";
    // document.querySelectorAll(".thirty").style.display = 'none';
 }
 function display31(){
    daysBoxes.style.display = "initial";
 }
 function display28(){
    daysBoxes.style.display = "block";
    document.querySelectorAll(".nov").style.display = 'none';
 }


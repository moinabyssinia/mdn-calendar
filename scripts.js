let heading = document.querySelector("h1");
let userChoice = document.getElementsByTagName("select");

userChoice.onchange = function(){
    changeHeader();
}

//rename heading
function changeHeader(){
    heading.textContent = userChoice[0].value;
}
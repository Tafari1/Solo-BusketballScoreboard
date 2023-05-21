let HomeScore = document.getElementById("Home-score")

let GuestScore = document.getElementById("Guest-score");
let num1Guest = 0
let num1Home = 0

function HomePlus1(){
    HomeScore.textContent = num1Home+=1;
}

function HomePlus2(){
    HomeScore.textContent = num1Home+=2;
}

function HomePlus3(){
    HomeScore.textContent = num1Home+=3;
}



function GuestPlus1(){
    GuestScore.textContent = num1Guest+=1;

// Test if the button works
  console.log("hi")  
}

function GuestPlus2(){
    GuestScore.textContent = num1Guest+=2;


}

function GuestPlus3(){
    GuestScore.textContent = num1Guest+=3;


}
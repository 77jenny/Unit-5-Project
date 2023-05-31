let counter = 0;
let startButton = document.querySelector(".startbutton");
let questions = document.querySelector(".questions");

startButton.onclick = function() {
  questions.style.display = "block";
};

let boxTwo = document.querySelector(".boxTwo");
let buttonOne = document.querySelector(".answer");
let optThree = "3";
let optTwo = "2";
let optOne = "1";
let choiceOne = "Happy";
let choiceUno = "happy";
let choiceTwo = "Lazy";
let choiceDos = "lazy";


buttonOne.onclick = function() {
  boxTwo.style.display = "block";
}

let button = document.querySelector(".answerTwo");
let goldenRetriever = document.querySelector(".goldenRetriever");
let quokka = document.querySelector(".quokka");
let koala = document.querySelector(".koala");
let cat = document.querySelector(".cat");
let panda = document.querySelector(".panda");
let red = document.querySelector(".red");

button.onclick = function() {
  let questionOne = document.querySelector(".questionOne").value;
  let questionTwo = document.querySelector(".questionTwo").value;counter = counter + 1;
    document.querySelector(".counter").innerHTML = counter;

  if (questionOne === optThree && choiceOne || choiceUno === questionTwo) {
    goldenRetriever.style.display = "block";
  } else if (questionOne === optTwo && choiceOne || choiceUno === questionTwo) {
    quokka.style.display = "block";
  } else if (questionOne === optOne && choiceOne || choiceUno === questionTwo) {
    koala.style.display = "block";
  } else if (questionOne === optThree && choiceTwo || choiceDos === questionTwo) {
    cat.style.display = "block";
  } else if (questionOne === optTwo && choiceTwo || choiceDos === questionTwo) {
    panda.style.display = "block";
  } else if (questionOne === optOne && choiceTwo || choiceDos === questionTwo) {
    red.style.display = "block";
  } };

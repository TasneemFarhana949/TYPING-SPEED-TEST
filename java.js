const paragraph = document.getElementById("paragraph").innerText;
const input = document.getElementById("input");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const restartBtn = document.getElementById("restartBtn");

const timerSection = document.getElementById("timerSection");
const resultSection = document.getElementById("resultSection");

const timeDisplay = document.getElementById("time");

const progressDisplay = document.getElementById("progress");
const correctDisplay = document.getElementById("correct");
const wrongDisplay = document.getElementById("wrong");
const accuracyDisplay = document.getElementById("accuracy");
const timeTakenDisplay = document.getElementById("timeTaken");

let timer;
let time = 0;

startBtn.addEventListener("click", function(){

    input.disabled = false;
    input.focus();

    timerSection.style.display = "block";
    resultSection.style.display = "none";

    timer = setInterval(function(){
        time++;
        timeDisplay.innerText = time;
    },1000);

});

stopBtn.addEventListener("click", function(){

    clearInterval(timer);

    let typedText = input.value;

    let correct = 0;
    let wrong = 0;

    for(let i=0;i<typedText.length;i++){

        if(typedText[i] === paragraph[i]){
            correct++;
        }else{
            wrong++;
        }

    }

    let progress = (typedText.length / paragraph.length) * 100;

    if(progress > 100){
        progress = 100;
    }

    let accuracy = (correct / typedText.length) * 100;

    if(isNaN(accuracy)){
        accuracy = 0;
    }

    progressDisplay.innerText = progress.toFixed(2) + "%";
    correctDisplay.innerText = correct;
    wrongDisplay.innerText = wrong;
    accuracyDisplay.innerText = accuracy.toFixed(2) + "%";
    timeTakenDisplay.innerText = time;

    resultSection.style.display = "block";

});

restartBtn.addEventListener("click", function(){

    clearInterval(timer);

    time = 0;
    timeDisplay.innerText = 0;

    input.value = "";
    input.disabled = true;

    resultSection.style.display = "none";
    timerSection.style.display = "none";

});
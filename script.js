const button = document.querySelector('#btn');
const par = document.querySelector('#show');
button.addEventListener('click', result);

function result(e){
    e.preventDefault();
    let points = 0;
    if(document.querySelector('#answerOne').checked){
        points++;
    }
    if(document.querySelector('#answerTwo').checked){
        points++;
    }
    if(document.querySelector('#answerThree').checked){
        points++;
    }
    if(document.querySelector('#answerFour').checked){
        points++;
    }
    if(document.querySelector('#answerFive').checked){
        points++;
    }
    par.textContent = "Ваши баллы: " + points
}

const input = document.querySelector('#guess');
const buttonTwo = document.querySelector('#btnTwo');
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        play(e);
    }
})

buttonTwo.addEventListener('click',play);

function play(e){
    e.preventDefault();
    const userNumber = document.querySelector('#guess').value;

    if(userNumber < 1 || userNumber > 20){
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введи число от 1 до 20!',
        })
    }
    else if(isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Нужно ввести число!',
        })
    }
    else{
        if(userNumber < answer) {
            Swal.fire('Попробуй число повыше!',
            'Компьютер пока побеждает!')
        }
        else {
            Swal.fire({
                title: 'Победа!',
                imageUrl: 'win.jpg',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Win',
            })
        }
    }
}


const buttonThree = document.querySelector('#btnThree');
const parGame = document.querySelector('#par');

const prediction = [
    "Характер",
    "Хаос",
    "Кетчуп",
    "Привычка",
    "Надежда",
    "Свидетель",
    "Хамелеон",
    "Разведка",
    "Фестиваль",
    "Инвестор",
    "Шейх",
    "Генерал",
    "Реклама",
    "Мафия",
    "Власть"
]

buttonThree.addEventListener("click", ()=>{
    let randomPrediction = prediction[Math.floor(Math.random()*prediction.length)];
    parGame.style.display = "block";
    parGame.textContent = randomPrediction;
})



const btnStart = document.querySelector("#btnStart");
const countdown = document.querySelector('#countdown');
btnStart.addEventListener('click',clickTimer);


const timer = 2;
let amountTimer = timer*60;
    
function calculateTime() {
    
    let min = Math.floor(amountTimer/60);
    let sec = amountTimer%60; 

    
    if(sec<10){
        sec = "0"+sec;
    }
    countdown.textContent = `${min} : ${sec}`;
    amountTimer--;

    if(amountTimer<0){
        stopTimer();
        amountTimer=0;
    }
    
    function stopTimer(){
        clearInterval;
    }
}

function clickTimer() {
    setInterval(calculateTime,1000);
}
    
play(e);
    
    



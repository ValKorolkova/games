function calculateTime() {

    let min = Math.floor(amountTimer / 60);
    let sec = amountTimer % 60;

    if (sec < 10) {
        sec = "0" + sec;
    }
    countdown.textContent = `${min} : ${sec}`;
    amountTimer--;

    if (amountTimer < 0) {
        clearInterval;
        stopTimer();
        // showPictures();
        amountTimer = 0;
    }
    let timerID = setInterval(calculateTime, 1000);
    function stopTimer() {
        clearInterval(timerID);
    }


}

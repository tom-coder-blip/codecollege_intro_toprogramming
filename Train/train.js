var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);
}

    function frame() {
        if(trainPosition < 1200) {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }else {
        clearInterval(animation);
        console.log("Train has stopped");
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 600) {
        alert("OOOOO!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 1200) {
        clearInterval(animation);
    }
  }
   


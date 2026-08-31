let score = 0
let timer = 20
let direction = 0

const ScoreText = document.getElementById(ScoreHolder)
const TimeText = document.getElementById(TimeHolder)
const DirectionText = document.getElementById(DirectionHolder)
const ControllerStatusText = document.getElementById(ControllerStatusHolder)

const directions = ["Up","Left","Down","Right"];

setInterval(oneSecond, 1000)

function oneSecond(){
    if(timer > 0){
        timer -= 1
    }
    TimeText.textContent = timer
}
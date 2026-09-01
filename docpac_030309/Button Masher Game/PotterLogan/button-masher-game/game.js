
let gameState = true


function game() {

    let score = 0
    let timer = 20
    let direction = 0


    const ScoreText = document.getElementById("scoreHolder")
    const TimeText = document.getElementById("timeHolder")
    const DirectionText = document.getElementById("directionHolder")
    const ControllerStatusText = document.getElementById("controllerStatusHolder")

    const directions = ["Up", "Left", "Down", "Right"];
    //navigator.getGamepads

    if (gameState) {
        setInterval(oneSecond, 1000)

        setInterval(twoSeconds, 2000)
        gameState = false
    }
    window.addEventListener("gamepadconnected", (e) => {
        ControllerStatusText.textContent = "Gamepad Connected!"
    }
    )
    window.addEventListener("gamepaddisconnected", (e) => {
        ControllerStatusText.textContent = "Gamepad Not Connected!"
    }
    )

    function pollGamepad(){
        buttonPressed = navigator.getGamepads()[0].buttons[0]
        console.log(buttonPressed)
    }

    function oneSecond() {
        if (timer > 0) {
            timer -= 1
            TimeText.textContent = timer
        } else {
            gameState = true
        }
    }

    function twoSeconds() {
        if (timer > 0) {
            direction = Math.floor(Math.random() * 4)
            DirectionText.textContent = directions[direction]
            console.log(direction)
        }
        pollGamepad()
    }

    if (gameState = false) {

    }

}



touchArea = document.getElementById("toucharea")
object = document.getElementById("player")
touchstatus = document.getElementById("touchStatus")

touchActive = false
startX = 50
startY = 50
currentX = 50
currentY = 50
deltaX = 0
deltaY = 0

areaRectangle = touchArea.getBoundingClientRect()

SWIPE_DISTANCE = 400
TAP_TOLERANCE = 50

addEventListener("touchstart", (event) => {

    if (event.touches[0] != null) {
        startX = event.touches[0].clientX
        startY = event.touches[0].clientY
        currentX = event.touches[0].clientX
        currentY = event.touches[0].clientY

        console.log("X", currentX)
        console.log("Y", currentY)


        localX = event.touches[0].clientX - areaRectangle.left
        localY = event.touches[0].clientY - areaRectangle.top

        console.log(localX)

    }


})


addEventListener("touchmove", (event) => {

    currentX = event.touches[0].clientX
    currentY = event.touches[0].clientY
    deltaX = currentX - startX
    deltaY = currentY - startY

    localX = event.touches[0].clientX - areaRectangle.left
    localY = event.touches[0].clientY - areaRectangle.top

    object.style.top = `${localY - 25}px`
    object.style.left = `${localX - 25}px`


})

addEventListener("touchend", (event) => {

    object.style.top = `${localY - 25}px`
    object.style.left = `${localX - 25}px`


})
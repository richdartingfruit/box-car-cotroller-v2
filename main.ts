input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showNumber(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(5)
    basic.showNumber(5)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(6)
    basic.showNumber(6)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(4)
    basic.showNumber(4)
})
radio.setGroup(1)
basic.forever(function () {
	
})

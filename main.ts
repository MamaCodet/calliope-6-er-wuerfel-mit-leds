let zahl = 0
input.onGesture(Gesture.Shake, function () {
    zahl = randint(1, 6)
    basic.showNumber(zahl)
    if (zahl == 1) {
        basic.setLedColor(0x7f00ff)
    }
    if (zahl == 2) {
        basic.setLedColor(0x00ffff)
    }
    if (zahl == 3) {
        basic.setLedColor(0x0000ff)
    }
    if (zahl == 4) {
        basic.setLedColor(0xff0000)
    }
    if (zahl == 5) {
        basic.setLedColor(0xffff00)
    }
    if (zahl == 6) {
        basic.setLedColor(0x00ff00)
    }
})

basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 17) {
        servos.P0.setAngle(0)
        servos.P0.run(100)
    } else if (input.temperature() <= 10) {
        servos.P0.stop()
        servos.P0.setAngle(0)
    }
})

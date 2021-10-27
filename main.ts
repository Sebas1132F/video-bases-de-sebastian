basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 21) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Sad)
    }
    basic.showNumber(input.temperature())
    while (input.temperature() > 21) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Happy)
    }
})

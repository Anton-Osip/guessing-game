class GuessingGame {
    constructor() {
        this.number = null
        this.min = null
        this.max = null
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.number = Math.round(this.min + (this.max - this.min) / 2)
        return this.number
    }

    lower() {
        this.setRange(this.min, this.number)
    }

    greater() {
        this.setRange(this.number, this.max)
    }
}

module.exports = GuessingGame;

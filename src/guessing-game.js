class GuessingGame {
    constructor() {
        this.startIndex = 0;
        this.endIndex = 0;
        this.middleIndex = 0;
    }

    setRange(min, max) {
        this.startIndex = min;
        this.endIndex = max; 
    }

    guess() {
        this.middleIndex = Math.ceil((this.startIndex + this.endIndex) / 2);

        return this.middleIndex;
    }

    lower() {
        this.endIndex = this.middleIndex;
    }

    greater() {
        this.startIndex = this.middleIndex;
    }
}

module.exports = GuessingGame;

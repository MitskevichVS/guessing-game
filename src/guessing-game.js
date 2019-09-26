class GuessingGame {
    constructor() {
        this.array = [];
        this.answer = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        this.middleIndex = 0;
    }

    setRange(min, max) {
        let minVal = min;
        let maxVal = max; 
        let arr = new Array;
        while (minVal !== maxVal){
            arr.push(minVal);
            minVal += 1;
        }
        this.endIndex = arr.length - 1;
        this.array = arr;
    }

    guess() {
        console.log(this.startIndex);
        console.log(this.endIndex);
        let middle = this.roundToPrecision(((this.startIndex + this.endIndex) / 2), 1);
        this.middleIndex = middle;
        console.log(`middle ${this.middleIndex}`);
        this.answer = this.array[this.middleIndex];
        return this.answer;
    }

    lower() {
        this.endIndex = this.middleIndex;
    }

    greater() {
        this.startIndex = this.middleIndex;
    }

    roundToPrecision(x, precision) {
        var y = +x + (precision === undefined ? 0.5 : precision/2);
        return y - (y % (precision === undefined ? 1 : +precision));
    }
}

module.exports = GuessingGame;

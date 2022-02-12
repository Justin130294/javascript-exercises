const sumAll = function(firstNumber, secondNumber) {
    if (typeof(firstNumber)!=="number" || typeof(secondNumber) !== "number" || firstNumber < 0 || secondNumber < 0) {
        return 'ERROR'
    } else {
        let sum = 0;
        if (firstNumber > secondNumber) {
            for (i=secondNumber; i<=firstNumber; i++) {
                sum += i;
            }
        } else {
            for (i=firstNumber; i<=secondNumber; i++) {
                sum += i;
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;

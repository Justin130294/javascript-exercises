const fibonacci = function(number) {
    let position = 0;
    //Convert string to integer
    if (Number.isInteger(number)) {
        if (number<0) {
            return "OOPS"
        } else {
            position = number;
        }
    } else {
        position = parseInt(number);
    }

    let fiboArray = [1, 1];
    for (i=2; i<position; i++) {
        let newNumber = fiboArray[i-1] + fiboArray[i-2];
        fiboArray.push(newNumber);
    }
    return fiboArray[number-1];
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;

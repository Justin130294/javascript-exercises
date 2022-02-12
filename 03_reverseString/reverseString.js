const reverseString = function(string) {
    stringArray=string.split("");
    arrayReverse=stringArray.reverse();
    arrayReverseJoin=arrayReverse.join("");
    return arrayReverseJoin
};

// Do not edit below this line
module.exports = reverseString;

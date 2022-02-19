const palindromes = function (string) {
    // remove all punctuation
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let rawLetters = string.replace(regex, '');
    // remove all spaces
    transformedString = rawLetters.replace(/\s+/g, '');

    // Change all to lower case
    transformedString = transformedString.toLowerCase();

    // Create reverse string
    transformedStringArray = transformedString.split('');
    reverseStringArray = transformedStringArray.reverse();
    reverseString = reverseStringArray.join('');

    return transformedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
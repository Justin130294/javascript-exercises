const removeFromArray = function() {
        let args=Array.from(arguments)
        originalArray=args.shift();
        for (i=0; i<args.length; i++) {
            let indexOfElement=originalArray.indexOf(args[i]);
            if (indexOfElement>-1) {
                originalArray.splice(indexOfElement,1);
            }
        }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;

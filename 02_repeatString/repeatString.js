const repeatString = function(string,num) {
    if (num<0) {
        return 'ERROR';
    } else {
        let repeatedstring='';
    
        for (i=0; i<num; i++) {
            repeatedstring+=string;
        }
        return repeatedstring;
    }
};

// Do not edit below this line
module.exports = repeatString;

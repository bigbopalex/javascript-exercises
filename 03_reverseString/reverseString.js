const reverseString = function(string) {
    let strArray = string.split("");
    let reverseArray = [];
    for (let i=0; i<strArray.length ; i++){
        reverseArray[i] = strArray[strArray.length-i-1];
        console.log (strArray +" reversed "+ reverseArray);
    }
    return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;

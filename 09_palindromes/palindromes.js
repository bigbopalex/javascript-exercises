const palindromes = function (string) {
    return reverseString(cleanString(string)) === cleanString(string) ? true : false;
};

const cleanString = function (string) {
    return string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replace(/\s/g,'').toLowerCase();
};

const reverseString = function (string) {
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

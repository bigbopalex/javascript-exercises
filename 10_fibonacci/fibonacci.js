const fibonacci = function(num) {
    let current = [0,1,0];
    let counter = 2;

    while (counter<=num){
        current[2] = current[0]+current[1];
        console.log(current);
        current[0] = current[1];
        console.log(current);
        current[1] = current[2];
        console.log(current + "*");
        counter++;
    }
    return current[1];
};

// Do not edit below this line
module.exports = fibonacci;

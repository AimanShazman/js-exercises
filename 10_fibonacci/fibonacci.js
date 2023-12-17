const fibonacci = function(num) {
    let a = 1, b = 1;
    let temp;

    if(num <= 0) {
        return "OOPS";
    }

    if(num <= 2) {
        return 1;
    } 
    num = num - 2;

    while (num > 0) {
        temp = b;
        b = a + b;
        a = temp;
        num--;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

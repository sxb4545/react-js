var array = [20, 30, 40, 50, 60];

function sum(acc, value) {
    return acc + value;

}

var sumOfArrayElements = array.reduce(sum, 0);

console.log('Sum of ', array, "is : ", sumOfArrayElements);




function mul(acc, value) {
    return acc * value;

}

var mulOfArrayElements = array.reduce(mul, 1);

console.log('Mull of ', array, "is : ", mulOfArrayElements);


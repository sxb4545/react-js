var array = [20, 30, 40, 50, 60];

const product = (acc, value) => acc * value;

var mul = array.reduce(product, 1);

console.log(mul);


const sum = (acc, value) => {
    const result = acc + value;
    console.log('Processing Time' , result);
    return result;
};

var sumResult = array.reduce(sum, 0);

console.log(sumResult);



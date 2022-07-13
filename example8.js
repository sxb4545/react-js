var values = [1, 60, 34, 30, 20, 5];

function lessThan20Func(val) {
    return val < 20;
}

var lessThan20 = values.filter(lessThan20Func);


console.log(lessThan20);

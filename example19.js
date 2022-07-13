function printFirstandSecondElement([first, second]) {
    console.log('First element : ' + first + ', second is ' + second );

}


var array = [20, 30, 40, 50, 60];

printFirstandSecondElement(array);




function printSecondandFourthElement([, second, , fourth]) {
    console.log('Second element : ' + second + ', Fourth is ' + fourth );

}

printSecondandFourthElement(array);

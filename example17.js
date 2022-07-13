function sort(arr = [], direction = "ascending") {
    console.log("Sort the array", arr, direction);
}


sort([1,2,3]);
sort([4,5,6], 'descending');



function multiplyBy(a, mult) {
    mult = mult !== undefined ? mult : 4;
    console.log(a * mult);
}

multiplyBy(2);

multiplyBy(2, undefined);

multiplyBy(2, 0);

multiplyBy(2, 20);




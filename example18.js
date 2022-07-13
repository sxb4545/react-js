function sum(...args) {
    var total ;
    total = args.reduce((acc, elem) => acc + elem, 0);
    console.log(total);
}

sum(1,2,3);

sum(1,2,3,4,5);

sum(1,2,3,4,5,6,7,8);





var defaultColors = ["red", "green", "blue"];

var userDefinedColors = ["yellow", "orange"];

var mergedColors = [...defaultColors, ...userDefinedColors];

console.log(mergedColors);





function printColors(first, second, third, ...others) {
    console.log("Top Three colors " + first + "," + second + "," + third + " Others are : " + others);
}


printColors("red", "green", "blue", "yellow", "black");


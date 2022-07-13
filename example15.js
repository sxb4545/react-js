const color = 'red';

const point = {
    x : 5,
    y : 10,
    color,

    toString() {
        return '[X=' + this.x + ', Y= ' + this.y + ']';
    },
    ['prop_' + 42] : 42
}


console.log('The point is ' + point);

console.log("The dynamic property is " + point.prop_42);


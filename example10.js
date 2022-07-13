var employees = [
    {name : 'Harpreet', sal : 5000000},
    {name : 'jaiswal', sal : 9000000},
    {name : 'priyanka', sal : 4000000},
    {name : 'kedar', sal : 19000000},
    {name : 'Om', sal : 16000000}

];

function highPaidPerson(person) {
    return person.sal > 10000000000 && person.sal < 4500000000000;

}

var isEveryOneGetsHighSal = employees.every(highPaidPerson);

console.log('Result', isEveryOneGetsHighSal);


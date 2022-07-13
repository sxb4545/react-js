var employees = [
    {name : 'Harpreet', sal : 5000000},
    {name : 'jaiswal', sal : 9000000},
    {name : 'priyanka', sal : 4000000},
    {name : 'kedar', sal : 19000000},
    {name : 'Om', sal : 16000000}

];

function highPaidPerson(person) {
    return person.sal > 1000000 && person.sal < 45000000;

}

var someresult = employees.some(highPaidPerson);

console.log('Result', someresult);


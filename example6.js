var companies = ['Oracle', 'Sun', 'Ibm', 'SAP'];

function print(val) {
    console.log(val);

}

companies.forEach(print);


console.log('---------');

with(companies) {
    
    forEach(print)
}
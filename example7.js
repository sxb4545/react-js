var companies = ['Oracle', 'Sun', 'Ibm', 'SAP'];

function changeProperty(val) {
    return val.toUpperCase();

}

var changedArray = companies.map(changeProperty);

console.log(changedArray);



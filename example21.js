function asysncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random();
            result > 0.5 ? resolve(result) : reject('Ooops.. I cannot handle this ')

        }, 1)
    });
}


for (let i=0; i<10;i++) {
    asysncFunc()
          .then(result => console.log('Result is : ' + result ))
          .catch(result => console.log('Error : ' + result));
}
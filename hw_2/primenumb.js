function getPrimeNumbers(n) {

    const array = [];
    for (let i = 2; array.length < n; i++) {
        let status = false;
        for (let counter = 0; counter < i; counter++) {
            if (i % array[counter] === 0) {
                status = true;
                break;
            }
        }
        if (status === false) {
            array.push(i)
        };

    }
    return array;
}


console.time();
console.log(getPrimeNumbers(process.argv[2]));
console.timeEnd();
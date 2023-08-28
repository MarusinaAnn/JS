function getPasswordChecker(password) {
    return function(guess) {
        if (password === guess) {
            return true;
        }
        return false;
    }
}

const check = getPasswordChecker('science');

console.log(check('sciensy'));
console.log(check('sciencee'));
console.log(check('science'));
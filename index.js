while (true) {
    let numberToGuess = Math.floor(Math.random() * 1000);

    console.log("Right number:", numberToGuess)

    let numberFromUser = prompt("Choose number from 0 to 999:")

    if (numberFromUser === "q") {
        break
    }

    numberFromUser = +numberFromUser

    console.log("You typed:", numberFromUser) 

    if (isNaN(numberFromUser) || (numberFromUser < 0 || numberFromUser > 999)) {
        alert("You entered an invalid number!")
    } else if (numberToGuess === numberFromUser) {
        alert("You win!")
    } else if (numberToGuess > numberFromUser) {
        alert("You lose!The hidden number is greater :)")
    } else if (numberToGuess < numberFromUser) {
        alert("You lose!The hidden number is less :)")
    }

}
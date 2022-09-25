// 1 максимальне число
function getMaxDigit(numbers) 
{
    let numArray = Array.from(numbers.toString()).map(Number);
    let maxNumber = numArray[0];

    for(let i = 0; i <= numArray.length; i++) {
        if(numArray[i] > maxNumber) {
            maxNumber = numArray[i]
        }
    }
    return maxNumber;
}
// 2 піднесення до степеня
function pow(base, power) {
    let number = 1
    for (let i = 1; i < power; i++) {
        number *= base;
    }
    return number;
 }
 
// 3 велика перша літера
function firstLetterUpper(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase();

}

// 4 податок від заробітної плати 
function salaryWithoutTax (salary) {
    let tax = 19.5;
    let percentAmount = salary * tax / 100;
    let salaryWithoutTax = salary - percentAmount;
    return salaryWithoutTax;
}
// 5 випадкове число
function getRandomNumber(number1, number2){
    let randomNumber = Math.random();
    let difference = number2 - number1;
    let value = Math.floor((randomNumber*difference)+number1);
    return value
}
// 6 підрахунок повторюваних літер
function countLetter (letter, word) {
    let newLetter = letter.toLowerCase();
    let newWord = word.toLowerCase();

    let counter = 0;

    for( i = 0; i < newWord.length; ++i) {
        if( newWord[i] == newLetter){
            counter++
        }
    }
    return counter;
}

// 1 (максимальне число)
let randomNumber = 1234567;
console.log("Максимальне число з наявних - " + randomNumber + ":" + getMaxDigit(randomNumber));

// 2 піднесення до степеня
let number = 5;
let power = 3;
console.log(number + " ^ " + power + " = " + pow(number, power));

// 3 велика перша літера
let incorrect = "вЛад";
console.log(incorrect + " -> " + firstLetterUpper(incorrect));

// 4 податок від заробітної плати 
let salary = 1000;
console.log(salaryWithoutTax (salary))

// 5 випадкове число
let number1 = 10;
let number2 = 30;
console.log("Випадкове число" + " = " + getRandomNumber(number1,number2))

// 6 підрахунок повторюваних літер
let word = "телетеатр";
let letter = "т";
console.log("Буква " + letter +  " в слові "  + word +  " зустрічається "  + countLetter(letter, word) +  " рази ") 
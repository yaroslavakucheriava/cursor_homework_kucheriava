//завдання 1

function getRandomArray(length, min, max) {
    let randomArray = [];

    for (let i = 0; i < length; i++) {
    let randomValue = Math.floor((Math.random()) * (max-min) + min);
    randomArray.push(randomValue);
}
return randomArray;
}
let newRandomArray = [];
newRandomArray = getRandomArray(10, 1, 100);
console.log(newRandomArray);

//завдання 3
function getAverage(...numbers){
   let i = 0;
   let averageNumb;
   const Array = [...numbers].filter(n => Number.isInteger(n));
   let sum = Array.reduce((a,b) => a + b, 0);
   averageNumb = sum / Array.length;

   return averageNumb
}
console.log(getAverage(2, 6, 9, 54, 77, 83, 88));

//завдання 5
const filterEvenNumbers = (...numbers) => numbers.filter((i) => i % 2);
console.log(filterEvenNumbers(1, 2, 3, 4, 5));

//завдання 6
const countPositiveNumbers = (...numbers) => numbers.filter((i) => i > 0).length;
console.log(countPositiveNumbers(1, -2, 3, 4, -25, -78, 99));

//завдання 7
const getDividedByFive = (...numbers) => numbers.filter((i) => !(i % 5));
console.log(getDividedByFive(1, 9, 15, 24, 25, 36, 45, 95));

//завдання 8
function replaceBadWords(string) {
    const badWords = ["shit", "fuck"];
    const censore = new RegExp(badWords.join("|"));
    const censoreWord = string

    .split(" ")
    .map((item) => item.replace(censore, "****"))
    .join(" ")

    return censoreWord
} 
console.log(replaceBadWords("fuck, fucking, motherfucker"))
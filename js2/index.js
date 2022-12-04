let firstNumber = parseInt(prompt('Enter your first number'));

while (isNaN(firstNumber)) {
    firstNumber = parseInt(prompt('Enter your number again'))
}

let lastNumber = parseInt(prompt('Enter your last number'));

while (isNaN(lastNumber) || lastNumber <= firstNumber) {
    lastNumber = parseInt(prompt('Enter your number again'))
}
console.log(firstNumber);
console.log(lastNumber);
let missPairNumber = confirm("Do you want to miss pair numbers?");
console.log(missPairNumber);
let result = 0;

for (let i = firstNumber; i <= lastNumber; i++) {
let isEven = i % 2 === 0;
    if(missPairNumber && isEven) {
    continue  
}
result += i;  
}

console.log(result)
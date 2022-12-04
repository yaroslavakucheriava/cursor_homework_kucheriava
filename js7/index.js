const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// завдання 1 - створити функцію, що рахує скільки податків треба заплатити

function getMyTaxes (salary) {
  return Number(this.tax * salary); 
}
console.log(getMyTaxes.call(ukraine, 10000));

// завдання 2 - створити функцію, що рахує скільки у середньому податків
function getMiddleTaxes (country) {
  return Number(this.tax * this.middleSalary); 
}
console.log(getMiddleTaxes.call(ukraine));

// завдання 3 - створити функцію, що рахує, скільки всього податків
function getTotalTaxes (country) {
  return Number(this.tax * this.middleSalary * this.vacancies); 
}
console.log(getTotalTaxes.call(ukraine));

// завдання 4 - створити функцію, що буде писати в консоль об'єкт

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;}
  
function getMySalary (country) {
  
  const objectToReturn = {}

  const newObjectReturnFn = () => {
    objectToReturn.salary = getRandomNumber(1500, 2000);
    objectToReturn.taxes = Number((this.tax * objectToReturn.salary).toFixed(2));
    objectToReturn.profit = Number((objectToReturn.salary - objectToReturn.taxes).toFixed(2));
    return objectToReturn;
  }

  setInterval(() =>  console.log(newObjectReturnFn()), 10000);

}

getMySalary.call(ukraine)
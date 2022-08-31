// створити 3 змінні
let peachPrice = 15.678,
    grapePrice = 123.965,
    mangoPrice = 90.2345,
    amount = 3;
    

// максимальне число    
console.log(`Максимальна ціна: ${Math.max(peachPrice, grapePrice, mangoPrice)}`);

// мінімальне число
console.log(`Мінімальна ціна: ${Math.min(peachPrice, grapePrice, mangoPrice)}`);

// вартість всіх товарів
let price = peachPrice + grapePrice + mangoPrice;
console.log(`Вартість всіх товарів: ${price}`);    
    
// округлення вартості товарів в меншу сторону    
let peachValue = Math.floor(peachPrice),
    grapeValue = Math.floor(grapePrice),
    mangoValue = Math.floor(mangoPrice),
    value = peachValue + grapeValue + mangoValue;
console.log(`Округлена вартість до меншого: ${value}`);

// сума товарів округлена до сотень    
console.log(`Округлена вартість до сотень: ${Math.round(value/100)*100}`);
     
// boolean
console.log(`Вартість товарів - парне число: ${value % 2 === 0}`);
console.log(`Вартість товарів - непарне число: ${value % 2 === 1}`);

// сума решти, при оплаті всіх товарів сумою 500   
console.log(`Сума решти при оплаті всіх товарів з 500, без округлення: ${500-price}`);

// середнє значення цін, округлене до 2го знаку
let average = (price/amount).toFixed(2);
console.log(`Середнє арифметичне:${average}`);
   
// випадкова знижка
const minValue = 1;
const maxValue = 50;
const randomValue = (maxValue - minValue) * Math.random() + minValue;
console.log(`Випадкова знижка: ${randomValue.toFixed()}`);

// випадкова знижка + сума до оплати
let discount = (price * randomValue)/100;
console.log(`Сума до оплати зі знижкою: ${price.toFixed() - discount.toFixed()}`);

// чистий прибуток
let cost = price.toFixed()/2,
let rebate = (price * randomValue)/100;
console.log(`Чистий прибуток: ${(cost-rebate).toFixed()}`);


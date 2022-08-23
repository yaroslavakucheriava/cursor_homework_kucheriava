// створити 3 змінні
let PeachPrice = 15.678,
    GrapePrice = 123.965,
    MangoPrice = 90.2345;
    amount = 3;

// максимальне число    
    console.log(`Максимальна ціна: ${Math.max(PeachPrice, GrapePrice, MangoPrice)}`);

// мінімальне число
    console.log(`Мінімальна ціна: ${Math.min(PeachPrice, GrapePrice, MangoPrice)}`);

// вартість всіх товарів
    Price = PeachPrice + GrapePrice + MangoPrice;
    console.log(`Вартість всіх товарів: ${Price}`);    
    
// округлення вартості товарів в меншу сторону    
let PeachValue = Math.floor(PeachPrice);
    GrapeValue = Math.floor(GrapePrice);
    MangoValue = Math.floor(MangoPrice);
    Value = PeachValue + GrapeValue + MangoValue;
    console.log(`Округлена вартість до меншого: ${Value}`);

// сума товарів округлена до сотень    
    console.log(`Округлена вартість до сотень: ${Math.round(Value/100)*100}`);
     
// boolean
    console.log(`Вартість товарів - парне число: ${Value % 2 === 0}`);
    console.log(`Вартість товарів - непарне число: ${Value % 2 === 1}`);

// сума решти, при оплаті всіх товарів сумою 500   
    console.log(`Сума решти при оплаті всіх товарів з 500, без округлення: ${500-Price}`);

// середнє значення цін, округлене до 2го знаку
    let average = (Price/amount).toFixed(2);
    console.log(`Середнє арифметичне:${average}`);
   
// випадкова знижка
const minValue = 1;
const maxValue = 50;
const randomValue = (maxValue - minValue) * Math.random() + minValue;
console.log(`Випадкова знижка: ${randomValue.toFixed()}`);

// випадкова знижка + сума до оплати
console.log(`Сума до оплати зі знижкою: ${(Price.toFixed() - ((Price * randomValue)/100)).toFixed()}`);

// чистий прибуток
cost = Price.toFixed()/2;
console.log(`Чистий прибуток: ${cost-((Price * randomValue)/100).toFixed()}`);


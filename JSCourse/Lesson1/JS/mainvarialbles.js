//ПЕРЕМЕННЫЕ

//Вывод в консоль
console.log("Hello, from JS");

//Стандарт ES6
//Использовать Let и const
let userName = "Марк";
userName = "Николай";
console.log(userName);

//Переменная const не может менять свое значение по ходу программы

const yearOfBirth = 2002; //При объявлении константы мы должны сразу же присвоить ей ее значение

function sum() {
  var userN = "Колян"; //Var доступна только внутри своей функции
  console.log(userN);
}

sum();

let age = 30; //Число
let isMarried = true; //BOOL

//Есть динамическая типизация
//Если переменная объявлена но значение не установленно, она будет undefined
let userName1;
console.log(userName1); //Undefined
userName1 = null; // Так можно обнулить переменную

//Оператор typeof
console.log(typeof isMarried);
console.log(typeof userName);
console.log(typeof age);

// BigInt
console.log(Number.MAX_SAFE_INTEGER);
console.log(9809705703475034700234593405n); //Числа BIGINT можно использовать только с такими же числами с n на конце

/*
Number
BigInt
Boolean 
null
undefined
object
Array
Symbol
*/

//Операторы сравнения и условия

console.log(10 > 5); //true
console.log(10 < 3); //false

//Операторы сравнения
// >, <, >=, <=, ==, ===, !=, !==

let result = 10 == 5;
console.log(result);
console.log(typeof result);

console.log("Строгое и не строгое сравнение");
console.log("5" == 5); //true
console.log("5" === 5); //false - строгое сравнение

//Условия

const time = 12;

if (time < 12) {
  console.log("Доброе утро");
} else if (time >= 12 && time < 18) {
  console.log("Добрый день");
} else {
  console.log("Добрый вечер");
}

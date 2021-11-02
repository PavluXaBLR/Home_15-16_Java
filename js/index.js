/* 1) При помощи цикла for выведите нечётные числа от 7 до 15
Как только дойдет до числа 12 - прервать цикл и вывести "12. Цикл прерван" */

let a;
for (a = 7; a < 16 ; a++) {
    if (a == 12) break;
    if (a % 2 == 0) continue;
    console.log(a);
}
console.log(`${a}. Цикл прерван`);

/* 2) Перепишите на while
for (let j = 0; j < 5; j++) {

     alert( `number ${j}!` );
   }
*/

let j = 0;
while (j < 5) {
    console.log( `number ${j}!` );
    j++;
}


// 3)

function howManyDays(month) {
  let days;
  switch (month){
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		console.log (31);
		break;
	case 4:
	case 6:
	case 9:
	case 11:
		console.log (30);
		break;
	case 2:
		console.log (28);
		break;

  }
  return days;
}
console.log(howManyDays(month))

/*4) Напишите функцию max(a, b),
	которая возвращает большее из чисел a и b. (через тернарный оператор)*/
function max(a, b) {
	return a > b ? a : b;
}
console.log(max (3, 5))


/*5) Напишите функцию pow(x, n), которая возвращает x в степени n.
	Иначе говоря, умножает x на себя n раз и возвращает результат. ( n > 0 )*/

function pow(x, n) {
	return x**n;
}
console.log (pow (9, 6))


/*6) Создать функцию, которая получает 2 числа, считает их произведение, и проверяет четное число или нечетное и выводит текст в consol.log
calcMultiplication(numOne, numTwo, addNum, evenNum)
addNum, evenNum - функции колбэки )*/

function calcMultiplication (numOne, numTwo, addNum, evenNum) {
	sumNum = numOne * numTwo;
	if (sumNum % 2 == 0) evenNum ();
	else {
		addNum ();
	}
}
function evenNum () {
	console.log("Четное");
}

function addNum () {
	console.log("Не четное");
}

console.log(calcMultiplication (2, 6, addNum, evenNum))


/*7) В объекте книга вывести в консоль ключи, если значение имеет булевский
тип данных
 */
let book = {
	numberOfPages : 545,
	cover  : true,
	isTheAuthorAlive  : false,
	isBestseller  : true,
	booksEditions  : 20000000,
};
for (let key in book) {
	if (typeof book[key] == 'boolean') {
		console.log(key + ': ' + book[key]);
	}
}

//8

function trainLength(totalLocomotive, totalFreightCar, totalCoachCar) {
    let locomotiveLength = 25;
    let freightCarLength = 30;
    let coachLength = 20;
    let length;
    length = (locomotiveLength * totalLocomotive) + (freightCarLength * totalFreightCar) + (coachLength * totalCoachCar);
    return length;
}
console.log(trainLength ( 1, 0, 9));

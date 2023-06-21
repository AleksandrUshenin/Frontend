function ex1(num){
	return Math.pow(num, 3) + Math.pow(3, 3);
}
console.log(`куб ${ex1(2)}`);

function ex2(num){
	if (isNaN(num)){
		return 'Error';
	}
	return `Размер заботной платы зы вычетом налогов равен ${num * 0.87}`;
}
console.log(ex2(prompt()));

function ex3(num1, num2, num3){
	if (num1 > num2){
		if (num1 > num3){
			return num1;
		}
		else{
			return num3;
		}
	}
	else {
		if (num2 > num3){
			return num2;
		}
		else{
			return num3;
		}
	}
}
let num1 = Number(prompt('Введите 1 число'));
let num2 = Number(prompt('Введите 2 число'));
let num3 = Number(prompt('Введите 3 число'));
console.log(ex3(num1 , num2, num3));

function ex4_1(num1, num2){
	return num1 + num2;
}
function ex4_2(num1, num2){
	if (num1 > num2){
		return num1 - num2;
	}
	return num2 - num1;
}
function ex4_3(num1, num2){
	return num1 * num2;
}
function ex4_4(num1, num2){
	if (num1 > num2){
		return num1 / num2;
	}
	return num2 / num1;
}
console.log(ex4_1(10, 4));
console.log(ex4_2(10, 4));
console.log(ex4_3(10, 4));
console.log(ex4_4(10, 4));
function ex1(){
	for(let i = 0; i < 11; i++){
		if(i === 0){
			console.log(`${i} - это ноль`);
		}
		else if (i % 2 === 0){
			console.log(`${i} - четное число`);
		}
		else{
			console.log(`${i} - нечетное число`);
		}
	}
}
console.log(`куб ${ex1(2)}`);

function ex2(){
	let arr = [1, 2, 3, 4, 5, 6, 7];
	let arr2 = new Array();
	for(let i = 0; i < arr.length; i++){
		if (arr[i] != 4 && arr[i] != 5){
			arr2.push(arr[i]);
		}
	}
	console.log(arr2);
}
ex2();

function ex3(){
	let arr = [];
	let sum = 0;
	let min = 10;
	let max = 0;
	for(let i = 0; i < 5; i++){
		arr.push(parseInt(Math.random(0, 9) * 10));
		sum += arr.at(-1);
		if (arr.at(-1) < min){
			min = arr.at(-1);
		}
		if (arr.at(-1) > max){
			max = arr.at(-1);
		}
	}
	console.log(`массив : ${arr}`);
	console.log(`сумма : ${sum}`);
	console.log(`максимум : ${max}`);
	console.log(`минимум : ${min}`);
}
ex3();

function ex4(){
	let arr = ['x']
	for (let i = 0; i < 20; i++){
		console.log(`${arr}`);
		arr.push('x');
	}
}
ex4();
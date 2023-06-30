function ex1(){
	const numbers = {
		keyin1: 1, 
		keyin2: 2, 
		keyin3: 3,
		keyin4: 4, 
		keyin5: 5,
		keyin6: 6,
		keyin7: 7
	}
	for(const key in numbers){
		if(numbers[key] >= 3){
			console.log(numbers[key]);
		}
	}
}
ex1(2)	;

function ex2(){
	const post = {
		author: 'John',
		postId: 23,
		coments:[
			{
				userId: 10,
				userName: 'Alex',
				text: 'lorem ipsum',
				rating: {
					likes: 10,
					dislikes: 2,
				}
			},
			{
				userId: 5,
				userName: 'Jane',
				text: 'lorem ipsum 2',
				rating: {
					likes: 3,
					dislikes: 1,
				}
			}
		]
	}
	console.log(post.author);
	console.log(post.coments[0].rating.dislikes);
	console.log(post.coments[1].userId);
	console.log(post.coments[1].text);
	}
ex2();

function ex3(){
	const products = [
		{
			id: 3,
			price: 200
		},
		{
			id: 4,
			price: 900
		},
		{
			id: 1,
			price: 1000
		}
	]
	products.forEach(element => element.price = element.price * 0.85);
	products.forEach(element => console.log(element));
}
ex3();

function ex4(){
	const products =[
		{
			id: 3,
			price: 127,
			photos: [
				'1.jpg',
				'2.jpg'
			]
		},
		{
			id: 5,
			price: 499,
			photos: []
		},
		{
			id: 10,
			price: 26,
			photos: [
				'3.jpg'
			]
		},
		{
			id: 8,
			price: 78,
		}
	];
	const res1 = products.filter((product) => {
		if (product.photos != null){
			if (product.photos.length > 0) return true;
		}
		return false;
	})
	console.log('products >>>>');
	console.log(products);
	console.log('products <<<<');
	console.log('res1 >>>>');
	console.log(res1);
	console.log('res1 <<<<');
	const res2 = products.sort((productA, productB) => productA.price - productB.price);
	/*const res2 = products.sort((productA, productB) => {
		if (productA.price > productB.price){
			return 1;
		}
		else if(productA.price < productB.price){
			return -1;
		}
		return 0;
	});
	*/
	console.log('res2 >>>>');
	console.log(res2);
	console.log('res2 <<<<');
}
ex4();

function ex5(){
	const en = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
	const ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
	const res = {};
	for(let i = 0; i < ru.length; i++){
		res[en[i]] = ru[i];
	}
	console.log(res);
}
ex5();
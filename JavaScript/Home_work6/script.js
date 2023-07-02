const ex1 = document.getElementById('super_link');
console.log('ex1');
console.log(ex1);

const ex2 = document.getElementsByClassName('card-link');
console.log('ex2');
console.log(ex2);
for (let i = 0; i < ex2.length; i++){
    ex2[i].textContent = 'ссылка';
}

const ex3 = document.querySelector('.card-body');
const ex3_2 = ex3.getElementsByClassName('card-link');
console.log('ex3');
console.log(ex3_2);

console.log('ex4');
const ex4 = document.querySelector('[data-number="50"]');
console.log(ex4);

console.log('ex5');
const ex5 = document.querySelector('title');
console.log(ex5);

console.log('ex6');
const ex6 = document.querySelector('.card-title').parentElement;
console.log(ex6);

console.log('ex7');
const ex7 = document.createElement('p');
ex7.textContent = 'Привет';
const card = document.querySelector('.card');
card.prepend(ex7);// добавление в начало элемента

console.log('ex8');
const ex8 = document.querySelector('h6');
ex8.remove();
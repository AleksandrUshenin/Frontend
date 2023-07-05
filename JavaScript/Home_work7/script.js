console.log('ex1');
const ex1 = document.querySelectorAll('.dropdown-item');
ex1.forEach((elem) => elem.classList.add('super-dropdown'));
ex1.forEach((elem) => console.log(elem.classList));

console.log('ex2');
const ex2 = document.querySelector('.btn');
console.log(ex2.classList);
const listClass = ex2.classList;
if (!listClass.contains('btn-secondary')){
    listClass.add('btn-secondary');
    console.log('add class');
}else{
    console.log('class contains');
}

console.log('ex3');
const ex3 = document.querySelector('.menu');
console.log(ex3);
const ex3_1 = ex3.classList.remove('dropdown-menu');
console.log(ex3);

console.log('ex4');
const ex4 = document.querySelector('.dropdown');
console.log(ex4);
ex4.insertAdjacentHTML('afterend', '<a href="#">link</a>');
const ex4_1 = ex4.parentElement.children;
console.log(ex4_1[1]);

console.log('ex5');
const ex5 = document.getElementById('dropdownMenuButton');
console.log(ex5);
ex5.id = 'superDropdown';

console.log('ex6');
const ex6 = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
//const ex6_1 = document.getElementsByName('aria-labelledby');
ex6.setAttribute('data-dd', 3)
console.log(ex6);
//console.log(ex6_1);

console.log('ex7');
//const ex7 = document.getElementsByClassName('dropdown-toggle');
const ex7_1 = document.querySelector('.dropdown-toggle');
ex7_1.removeAttribute('type');
console.log(ex7_1);
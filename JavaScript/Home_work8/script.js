document.addEventListener('DOMContentLoaded', function(e){
    console.log('все теги прогрузились');
});

window.addEventListener('load', function(e){
    console.log('страница загрузилась');
});

const textarea = document.querySelector('textarea');
textarea.addEventListener('mouseover', function(){
    console.log('Вы навели на textarea.');
})

const ul = document.querySelector('ul');
const ulEvent = (e) => {
    const allLi = document.querySelectorAll('li');
    for (let i = 0; i < allLi.length; i++) {
        if (e.target == allLi[i]){
            return;
        }
    }
    console.log(e.target.textContent);
}
ul.addEventListener('click', ulEvent);

const allLiColor = document.querySelectorAll('li');
for (let i = 1; i < allLiColor.length; i+=2) {
    allLiColor[i].style.backgroundColor = 'blue';
}

const body = document.querySelector('body');
console.log(body);
const bodyEvent = (e) => {
    const classList = e.target.classList;
    if (classList.length < 1 ){
        console.log(`Класс "super_element" не присутствует в элементе ${e.target.tagName}`);
    }else{
        for (let i = 0; i < classList.length; i++) {
            if (classList[i] == 'super_element'){
                console.log(`Класс "super_element" присутствует в элементе ${e.target.tagName}`);
            }else{
                console.log(`Класс "super_element" не присутствует в элементе ${e.target.tagName}`);
            }
        }
    }
}
body.addEventListener('click', bodyEvent);
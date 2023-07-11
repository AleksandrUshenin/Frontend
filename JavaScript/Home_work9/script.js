const inputText = document.querySelector('#from');
const span = document.querySelector('.span_text');
inputText.addEventListener('input',() => {
    span.textContent = inputText.value;
});


const messageBtn = document.querySelector('.messageBtn');
const message = document.querySelector('.message');
messageBtn.addEventListener('click', () =>{
    message.classList.add('animate_animated', 'animate_fadeInLeftBig');
    message.style.visibility = 'visible';
});


const sendBtm = document.querySelector('.send');
sendBtm.addEventListener('click', (e) => {
    const forms = document.querySelectorAll('.form-control');
    let run = true;
    for (let i = 0; i < forms.length; i++) {
        if (forms[i].value == ''){
            run = false;
            console.log('error');
        }
    }
    if (!run){
        forms.forEach((obj) => {
            e.preventDefault();
            obj.classList.add('error');
        });
    }
    else{
        forms.forEach((obj) => {
            obj.classList.remove('error');
        });
    }
    // e.stopImmediatePropagation();
});

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

const createCounter = () => {
    let count2 = 0;
    class myObject {
        count = 0
        increment(){
            return this.count++;
        }
        decrement(){
            return this.count--;
        }
    }
    const cl = new myObject();
    return cl;
}

const createCounter2 = () => {
    let count = 0;
    increment = () =>{
        return count++;
    }
    decrement = () =>{
        return count--;
    }
    return [increment, decrement];
}

let objctMy = createCounter();
console.log('part 1');
console.log(objctMy.increment());
console.log(objctMy.increment());
console.log(objctMy.increment());
console.log('part 2');
const incremention = createCounter2()[0];
console.log(increment());
console.log(increment());
const decremention = createCounter2()[1];
console.log(decrement());
console.log(decrement());

const dom = document.querySelector('body');
function findElementByClass(dom, name){
    let el = dom;
    if (dom.classList.contains(name)){
        return dom;
    }else if (dom.children.length == 0){
        return null;
    }
    else{
        for (let i = 0; i < dom.children.length; i++) {
            el = findElementByClass(dom.children[i], name);
            if (el != null){
                return el;
            }
        }
    }
}

console.log(findElementByClass(dom, '33'), 'find');

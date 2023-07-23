export let cart_shop = [];
window.name = {};
//name = 'name';
export function GET(){
    return cart_shop;
};
//export {cart_shop as "cart_shop"};

const elements = document.querySelectorAll('.btn_a');
//console.log(elements.quantity('goods_item'));
elements.forEach(el => {
    el.addEventListener('click', (e)=> {
        e.preventDefault();
        cart_shop.push(el.closest('.goods_item'));
        console.log(cart_shop);
        // const box = document.querySelector('.goods_shop');
        //     cart_shop.forEach(el => {
        //     box.appendChild(el);
        // });
    });
});

// const cart = document.querySelector('.menu3');
// cart.addEventListener('click', ()=> {
//     window.open("cart.html");
// });
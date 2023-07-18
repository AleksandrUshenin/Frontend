const datas = [];
const info_data_class = [['color', 'font'], ['font'], ['font'], ['box', 'box_style', 'font']];
const info_data_name_position = ['Price:', 'Color:', 'Size:', 'Quantity:'];

const datasParse = [];
for (let i = 0; i < datas.length; i++) {
    datasParse.push(JSON.parse(datas[i]).results[0]);
}

const content = document.querySelector('.cart_left');

for (let i = 0; i < 1; i++) {//datasParse.length
    const item = document.createElement('div');
    item.classList.add('cart_left_item');

    const item_img = document.createElement('div');
    item_img.classList.add('img');

    const img = document.createElement('img');
    img.src = 'img/cart1.png';//datasParse[i]; // img/cart1.png
    img.alt = 'goods';

    const info = document.createElement('div');
    info.classList.add('info');
    
    const info_head = document.createElement('div');
    info_head.classList.add('info_head');

    const info_h = document.createElement('h1');
    info_h.textContent = 'MANGO  PEOPLE  T-SHIRT'; // MANGO  PEOPLE  T-SHIRT

    const svg = document.createElement('svg');

    const info_data = document.createElement('div');
    info_data.classList.add('info_data');

    for (let i2 = 0; i2 < 4; i2++) {
        const head = document.createElement('span');
        head.textContent = info_data_name_position[i2];
        head.classList.add('font');
        const data = document.createElement('span');
        data.textContent = i2;
        for (let i3 = 0; i3 < info_data_class[i2].length; i3++) {
            data.classList.add(info_data_class[i2][i3]);
        }
        const br = document.createElement('br');

        info_data.appendChild(head);
        info_data.appendChild(data);
        info_data.appendChild(br);
    }

    info_head.appendChild(info_h);
    info.appendChild(info_head);
    info.appendChild(info_data);
    item.appendChild(img);
    item.appendChild(info);
    content.prepend(item);
}
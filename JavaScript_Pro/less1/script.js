let musicCollection = [
    {
        title: "Название альбома1",
        artist: "Исполнитель1",
        year: "Год выпуска1"
    },
    {
        title: "Название альбома2",
        artist: "Исполнитель2",
        year: "Год выпуска2"
    },
    {
        title: "Название альбома3",
        artist: "Исполнитель3",
        year: "Год выпуска3"
    }
]
musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? { done: false, value: musicCollection[this.current++] } : { done: true };
        }
    }
}
for (let num of musicCollection) {
    console.log(num.title, num.artist, num.year);
}

function setCook(order) {
    let cooks = new Map();
    cooks.set('Пицца', 'Виктор')
        .set('Суши', 'Ольга ')
        .set('Десерты', 'Дмитрий');
    for (const cook of cooks) {
        if (order.has(cook[0])) {
            order.get(cook[0]).cook = cook[1];
        }
    }
}
function order(name, order, type) {
    return new Map().set(type, { 'order': order, 'costomer': name, 'cook': '' });
}
const costomers = [];
const costomer = order('Алексей', 'Пиццa Пепперони', 'Пицца');
setCook(costomer);
costomers.push(costomer);

const costomer_2 = order('Алексей', 'Тирамису', 'Десерты');
setCook(costomer_2);
costomers.push(costomer_2);

const costomer1 = order('Мария', 'Суши Калифорния', 'Суши');
setCook(costomer1);  
costomers.push(costomer1);

const costomer1_2 = order('Мария', 'Пиццa Маргарита', 'Пиццa');
setCook(costomer1_2);  
costomers.push(costomer1_2);

const costomer2 = order('Ирина', 'Чизкейк', 'Десерты');
setCook(costomer2);
costomers.push(costomer2);

console.log(costomers);
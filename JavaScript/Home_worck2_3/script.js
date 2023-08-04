class Employee {
    name = '';
    constructor(name){
        this.name = name;
    }
    displayInfo(){
        console.log(this.name);
    }
}

class Manager extends Employee {
    department = '';
    constructor(name, department){
        super(name);
        this.department = department;
    }
    displayInfo(){
        console.log(`name:${this.name}\ndepartment: ${this.department}`);
    }
}

const a = new Manager('Jane Doe', 'Sales');
a.displayInfo();

class Product{
    name = '';
    cost = 0;
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Order {
    orderNumber = 0;
    products = [];
    constructor(orderNumber){
        this.orderNumber = orderNumber;
    }
    addProduct(product){
        this.products.push(product);
    }
    getTotalPrice(){
        let price = 0;
        this.products.forEach(el => {
            price+=el.cost;
        });
        return price;
    }
}

const order = new Order(12345);

const product1 = new Product('Phone', 500);
order.addProduct(product1);

const product2 = new Product('Headphones', 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600
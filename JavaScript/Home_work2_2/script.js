class Boock{
    titel = '';
    author = '';
    pages = 0;

    constructor(titel, author, pages){
        this.titel = titel;
        this.author = author;
        this.pages = pages;
    }
    displayInfo(){
        console.log(`titel:${this.titel}\nauthor:${this.author}\npages:${this.pages}`);
    }
}

const book = new Boock('test', 'test_2' , 200);
book.displayInfo();


class Student{
    name = '';
    age = 0;
    grade = '';

    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`name:${this.name}\nage:${this.age}\ngrade:${this.grade}`);
    }
}

const students = [];
students.push(new Student('John Smith', 16, '10th grade'));
students.push(new Student('Jane Doe', 17, '11th grade'));

students.forEach(el => {el.displayInfo()});

class Client {
    static id = 0;
    id_client = 0;
    name = '';
    age = 0;
    constructor(name, age){
        this.id_client = Client.id++;
        this.name = name;
        this.age = age;
    }
}

class Bank{
    name = '';
    clients = [];
    account = [];
    constructor (name){
        this.name = name;
    }
    addClient(client){
        this.clients.push(client);
    }
    openAccount(client, sum){
        let number_account = Math.ceil(Math.random() * 100000);
        const acc = { 'client': client, 'sum':sum, 'number_account': number_account};
        this.account.push(acc);
        return number_account;
    }
    checkBalance(number_account){
        this.account.forEach(el => {
            if (el.number_account == number_account){
                console.log('sum:', el.sum);
            }
        })
    }
}
const bank = new Bank("Мой Банк");
const client1 = new Client('Иван', 25);
const client2 = new Client("Мария", 30);
bank.addClient(client1);
bank.addClient(client2);
const acc1 = bank.openAccount(client1, 1000);
const acc2 = bank.openAccount(client2, 500);
bank.checkBalance(acc1);
bank.checkBalance(acc2);
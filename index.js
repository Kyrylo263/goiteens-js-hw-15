// 1.
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення
// використовуючи Object.keys() і for...of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
let { mood, hobby, premium } = user
mood = "happy";
hobby = "skydiving";
premium = false;
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
    console.log(`${key} -- ${user[key]}`);
};

// 2.
// Напиши функцію countProps(obj), яка рахує кількість властивостей
// в об'єкті. Функція повертає число — кількість властивостей.

const object = {
    name: 'Poly',
    age: 34,
};
function countProps({ name, age }) {
    const props = Object.keys({ name, age });
    console.log(props.length);
};
countProps(object);

// 3.
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників
// і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники
// і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

function findBestEmployee({ Poly, Mango, Ajax, Kiwi }) {
    let bestWorker = '';
    let maxTasks = 0;
    const names = Object.keys({ Poly, Mango, Ajax, Kiwi });
    for (const name of names) {
        console.log({ Poly, Mango, Ajax, Kiwi }[name]);
        if ({ Poly, Mango, Ajax, Kiwi }[name] > maxTasks) {
            maxTasks = { Poly, Mango, Ajax, Kiwi }[name];
            bestWorker = name;
        };
    };
    return bestWorker;
};
console.log(
    findBestEmployee(
        {
            Poly: 30,
            Mango: 4,
            Ajax: 20,
            Kiwi: 35,
        },
    ),
);

// 4.
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму
// зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

function countTotalSalary({ mango, poly, alfred }) {
    const countTotalSalaryArr = Object.values({ mango, poly, alfred });
    let sum = 0;
    for (let i = 0; i < countTotalSalaryArr.length; i++) {
        sum += countTotalSalaryArr[i];
    };
    return sum;
};
console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
);

// 5.
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];
function getAllPropValues(arr, prop) {
    for (const { name, price, quantity } of arr) {
        console.log({ name, price, quantity }[prop]);
    };
};
getAllPropValues(products, 'price');

// 6.
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та
// ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (const { name, price, quantity } of allProducts) {
        if ({ name, price, quantity }.name === productName) {
            totalPrice = { name, price, quantity }.price * { name, price, quantity }.quantity;
        };
    };
    return totalPrice
};
console.log(calculateTotalPrice(products, 'Дроїд'));

//============================== 7.

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [{ id: 0, type: "deposit", amount: 0 }],

    createTransaction(amount, type) {
        const transaction = {
            id: account.transactions.length + 1,
            type,
            amount
        };
        return transaction;
    },

    deposit(amount) {
        let {createTransaction, transactions, balance} = this
        const transaction = createTransaction(amount, Transaction.DEPOSIT);
        transactions.push(transaction);
        balance += amount;
        return console.log(`Рахунок поповнено на ${amount}`);
    },

    withdraw(amount) {
        const {transactions, createTransaction, balance} = this
        if (amount > balance) {
            console.log("Недостатньо коштів.");
            return;
        }
        const transaction = createTransaction(amount, Transaction.WITHDRAW);
        transactions.push(transaction);
        balance -= amount;
        return console.log(`З рахунку знято ${amount}`);
    },

    getBalance() {
        const {balance} = this
        return balance
    },

    getTransactionDetails(id) {
        const {transactions} = this;
        for (const {id, type, amount} of transactions) {
            if ({id, type, amount}.id === id) {
                return {id, type, amount}
            }
        }
    },

    getTransactionTotal(type) {
        let sum = 0;
        const {transactions} = this;
        for (const {id, type, amount} of transactions) {
            if ({id, type, amount}.type === type) {
                sum += {id, type, amount}.amount
            }
        }
        return sum;
    },
};

account.deposit(1000);
account.withdraw(500);
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
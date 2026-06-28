// Ex 1
function exercise1() {
    function sum(a, b) {
        return a + b;
    }
    console.log(sum(2, 3));
}

// exercise1();

// Ex 2
function exercise2() {
    const first = 10;
    const second = 5;
    console.log(first + second);
}

// exercise2();

// Ex 3
function exercise3() {
    const numbers = [1, 2, 3];
    const result = numbers.map((num) => {
        return num * 2;
    });
    console.log(result);
}

// exercise3();

// Ex 4
function exercise4() {
    const numbers = [1, 2, 3, 4];
    const evens = numbers.filter((num) => {
        return num % 2 === 0;
    });
    console.log(evens);
}

// exercise4();

// Ex 5
function exercise5() {
    let total = 0;
    for (let i = 1; i <= 3; i++) {
        total += i;
    }
    console.log(total);
}

// exercise5();

// Ex 6
function exercise6() {
    const user = {
        name: "Hanan",
        age: 30,
    };
    console.log(user.name);
}

// exercise6();

// Ex 7
function exercise7() {
    const arr = [10, 20, 30];
    console.log(arr[2].toString());
}

// exercise7();

// Ex 8
function exercise8() {
    function greet(name) {
        if (!name) {
            return;
        }
        console.log("Hello " + name);
    }
    greet("David");
}

// exercise8();

// Ex 9
function exercise9() {
    function multiply(a, b) {
        return a * b;
    }
    const result = multiply(2, 4);
    console.log(result + 1);
}

// exercise9();

// Ex 10
function exercise10() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
}

// exercise10();

// Ex 11
function exercise11() {
    function change(user) {
        user.name = "Moshe";
    }
    const user = { name: "Hanan" };
    change(user);
    console.log(user.name);
}

// exercise11();

// Ex 12
function exercise12() {
    const user = { name: "Hanan" };
    const copy = { ...user };
    copy.name = "Ruth";
    console.log(user.name);
}

exercise12();

// Ex 13
function exercise13() {
    function getFullName(user) {
        return user.firstName + " " + user.lastName;
    }
    const user = {
        firstName: "Hanan",
        lastName: "Furman",
    };
    console.log(getFullName(user));
}

// exercise13();

// Ex 14
function exercise14() {
    function divide(a, b) {
        if (b === 0) {
            console.log("Cannot divide");
            return null;
        }
        return a / b;
    }
    console.log(divide(10, 0));
}

// exercise14();

// Ex 15
function exercise15() {
    const items = [1, 2, 3];
    items.forEach((item) => {
        if (item === 2) {
            return;
        }
        console.log(item);
    });
}

// exercise15();

// Ex 16
function exercise16() {
    const obj = {
        value: 10,
        getValue: function () {
            return this.value;
        },
    };
    const fn = obj.getValue();
    console.log(fn);
}

// exercise16();

// Ex 17
function exercise17() {
    function counter() {
        let count = 0;
        return {
            increment: () => count++,
            get: () => count,
        };
    }
    const c = counter();
    c.increment();
    c.increment();
    const get = c.get();
    console.log(get);
}

// exercise17();

// Ex 18
async function exercise18() {
    function fetchNumber() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(5);
            }, 300);
        });
    }

    const result = await fetchNumber();
    console.log(result * 2);
}

// exercise18();

// Ex 19
async function exercise19() {
    function getUser(id) {
        return new Promise((resolve) => {
            if (id === 1) {
                resolve({ name: "Hanan" });
            } else {
                resolve(null);
            }
        });
    }

    const user = await getUser(2);
    console.log(user?.name);
}

// exercise19();

// Ex 20
async function exercise20() {
    const numbers = [1, 2, 3];
    for (const num of numbers) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        console.log(num);
    }
    console.log("finished");
}

// exercise20();

// Ex 21
async function exercise21() {
    async function doubleNumbers() {
        const nums = [1, 2, 3];
        const result = await Promise.all(nums.map(async (num) => num * 2));
        console.log(result);
    }
    await doubleNumbers();
}

// exercise21();

// Ex 22
async function exercise22() {
    function getData() {
        return Promise.resolve({ items: [1, 2, 3] });
    }

    const data = await getData();
    console.log(data.items.length);
}

// exercise22();

// Ex 23
function exercise23() {
    let total = 0;
    function add(num) {
        total += Number(num);
    }
    add(5);
    add("10");
    add(3);
    console.log(total);
}

// exercise23();

// Ex 24
function exercise24() {
    function calc(items) {
        let sum = 0;
        function add(item) {
            if (item.price) {
                sum += item.price;
            }
        }
        items.forEach(add);
        return sum;
    }
    const items = [{ price: 10 }, { price: 20 }, { cost: 30 }];
    console.log(calc(items));
}

// exercise24();

// Ex 25
function exercise25() {
    function canEnter(user) {
        return user.isAdmin || (user.isLoggedIn && user.age > 18);
    }
    const user = { isAdmin: false, isLoggedIn: true, age: 16 };
    console.log(canEnter(user));
}

// exercise25();

// Ex 26
function exercise26() {
    function updateCart(cart) {
        const item = cart.items.find((i) => i.id === 3);
        if (item) item.price = 999;
    }
    const cart = {
        items: [
            { id: 1, price: 10 },
            { id: 2, price: 20 },
        ],
    };
    updateCart(cart);
    console.log(cart.items[0].price);
}

// exercise26();

// Ex 27
function exercise27() {
    function processUsers(users) {
        return users.map((user) => {
            if (user.active) {
                return { ...user, score: calculate(user) };
            }
            return user;
        });
    }

    function calculate(user) {
        return user.points ? user.points.reduce((a, b) => a + b, 0) : 0;
    }

    const users = [
        { active: true, points: [10, 20] },
        { active: true },
        { active: false, points: [5] },
    ];
    console.log(processUsers(users));
}

// exercise27();

// Ex 28
async function exercise28() {
    function runTasks(tasks) {
        return Promise.all(tasks.map((task) => task()));
    }
    const tasks = [
        () => Promise.resolve(1),
        () => Promise.resolve(2),
        () => Promise.resolve(3),
    ];
    console.log(await runTasks(tasks));
}

// exercise28();

// Ex 29
function exercise29() {
    const text = "hello";
    for (let i = 0; i < text.length; i++) {
        console.log(text[i].toUpperCase());
    }
}

// exercise29();

// Ex 30
function exercise30() {
    function createUser(name, age) {
        return {
            name: name,
            age,
        };
    }
    const user = createUser("Hanan", 30);
    console.log(user.name);
}

exercise30();

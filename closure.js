// Ex 1
function createLogger() {
    function message() {
        console.log("Hello");
    }
    return message;
}

const logger = createLogger();
logger();

// Ex 2
function createGreeting(name) {
    function great() {
        console.log(`Hello ${name}`);
    }
    return great;
}

const greeting = createGreeting("Yitzi");
greeting();

// Ex 3
function createCounter() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}

const incrementCount = createCounter();
incrementCount();
incrementCount();
incrementCount();
incrementCount();

// Ex 4
// 10 Because the outer function returns the a function that saves the value.

// Ex 5
function createMultiplier(x) {
    return function (n) {
        return x * n;
    };
}

const double = createMultiplier(2);
double(5);

// Ex 6
function createAdder(n) {
    return function (a) {
        return n + a;
    };
}

const add5 = createAdder(5);
add5(3);

// Ex 7
function createSecret() {
    let secret = "don't say";
    function getSecret() {
        return secret;
    }
    function setSecret(newSecret) {
        secret = newSecret;
    }
    return { getSecret, setSecret };
}

const mySecret = createSecret();
console.log(mySecret.getSecret());
mySecret.setSecret("a different string");
console.log(mySecret.getSecret());

// Ex 8
function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }
        return result;
    };
}

const sayHello = (name) => `Hello ${name}`;

const initOnce = once(sayHello);
console.log(initOnce("Alice"));
console.log(initOnce("Bob"));

// Ex 9
// 3 3 3 Because the way JS stores the value in is by a global scope and the loop ends before the time to print and thats way it will print 3 3 3 witch is the last value of the loop.

// Ex 10
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}

// Ex 11
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

const fastAdd = memoize((a, b) => a + b);
fastAdd(1, 2);
fastAdd(1, 2);

// Ex 12
function createStack() {
    const stock = [];

    function push(value) {
        stock.push(value);
    }

    function pop() {
        stock.pop();
    }

    function peek() {
        return stock[stock.length - 1];
    }

    return { push, pop, peek };
}

// Ex 13
function createIdGenerator() {
    let lastId = 0;
    return function () {
        lastId++;
        return lastId;
    };
}

const gen = createIdGenerator();
console.log(gen());
console.log(gen());

// Ex 14
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Ex 15
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    function deposit(amount) {
        balance += amount;
    }

    function withdraw(amount) {
        balance -= amount;
    }

    function getBalance() {
        return balance;
    }

    return { deposit, withdraw, getBalance };
}

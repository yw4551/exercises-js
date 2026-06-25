// Ex 1, 2, 4, 5
const isAdult = (age) =>
    age > 18 ? "you are an adult." : "You are still young.";

const getName = (name, age) => {
    return {
        name: name,
        age: age,
        greet: `Hi i'm ${name}`,
        adult: isAdult(age),
    };
};

const name = getName("Dana", 28);
console.log(name);

// Ex 3
const name2 = getName("John", 32);
console.log(name2);

// Ex 6, 7, 8, 9, 10
const setCounter = () => {
    let count = 0;
    const add = () => {
        count++;
        return count;
    };
    const startWith = (start) => {
        count = start;
        return count;
    };
    const countDown = () => {
        count--;
        return count;
    };
    const showCounter = () => {
        return count;
    };
    return { add, startWith, countDown, showCounter };
};

const startCounter = setCounter();
console.log(startCounter.add());
console.log(startCounter.startWith(4));
console.log(startCounter.add());
console.log(startCounter.add());
console.log(startCounter.countDown());
console.log(startCounter.showCounter());

// Ex 11, 12, 13, 14
const counter = () => {
    let count = 0;
    return {
        increment: () => {
            count++;
            return count;
        },
        reset: () => {
            count = 0;
            return count;
        },
    };
};
const countStart = counter();
console.log(countStart.increment());
console.log(countStart.increment());
console.log(countStart.reset());
console.log(countStart.increment());
console.log(counter.count);
const secondCounter = counter();
console.log(secondCounter.increment());

// Ex 15, 16, 17, 18
const product = (name, price, stock = 0) => {
    return {
        name: name,
        price: price,
        stock: stock,
        inStock: () => (stock > 0 ? true : false),
        validation: () => {
            if (price < 0) {
                console.log("Price must be positive.");
            }
        },
    };
};

const laptop = product("Laptop", 1783);
console.log(laptop);
console.log(laptop.inStock());

// Ex 19
const createMultiplier = (multiplier) => {
    return (number) => {
        return number * multiplier;
    };
};

const double = createMultiplier(2);
console.log(double(10));

// Ex 20
const addPrefix = () => {
    return (name) => {
        return `Hello ${dana}`;
    };
};

// Ex 21, 22, 23
const messageSystem = () => {
    const messageList = [];
    return {
        addMessage: (message) => {
            messageList.push(message);
            return "Message added successfully.";
        },
        getAllMessages: () => {
            return messageList;
        },
        deleteMessage: (index) => {
            delete messageList[index];
            return "Message deleted successfully.";
        },
    };
};

const messages = messageSystem();
console.log(messages.addMessage("hi"));
console.log(messages.getAllMessages());
console.log(messages.deleteMessage(0));
console.log(messages.getAllMessages());

// Ex 24
function createUser(name) {
    let count = 0;
    return {
        name,
        login: () => {
            count++;
            return count;
        },
    };
}

const user = createUser("Jo");
console.log(user.login());

// Ex 25
const roleManager = () => {
    const roles = [];
    return {
        add: (role) => {
            roles.push(role);
            return "role added successfully.";
        },
        remove: (index) => {
            delete roles[index];
            return "role deleted successfully.";
        },
        check: (role) => {
            return roles.includes(role);
        },
    };
};

const roles = roleManager();
console.log(roles.add("hi"));
console.log(roles.check("hi"));
console.log(roles.remove(0));
console.log(roles.check("hi"));

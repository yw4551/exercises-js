// Ex 1
const numbers = [1, 2, 3];

console.log(numbers);

// Ex 2
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
console.log(fruits.at(-1));

// Ex 3
fruits[1] = "mango";
console.log(fruits);

// Ex 4
const pushOrange = fruits.push("orange");
console.log(pushOrange);
console.log(fruits);

// Ex 5
const deleted = fruits.pop();

console.log({
    deleted: deleted,
    remaining: fruits,
});

// Ex 6
fruits.unshift("kiwi");
console.log(fruits);

// Ex 7
fruits.shift();
console.log(fruits);

// Ex 8
const arr = ["a", "b", "c", "d"];
arr.splice(1, 1);
console.log(arr);

// Ex 9
arr.splice(1, 0, "X");
console.log(arr);

// Ex 10
arr.splice(2, 1, "Y");
console.log(arr);

// Ex 11
const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums.length);
console.log(nums.at(-1));

// Ex 12
const data = ["str", 12, true];
for (val of data) {
    console.log(val);
}

// Ex 13
const nums1 = [10, 20, 30];

for (num of nums1) {
    console.log(num);
}

// Ex 14
const sumNums = [5, 10, 15];
let total = 0;
for (num of sumNums) {
    total += num;
}
console.log(total);

// Ex 15
const sortNums = [3, 8, 12, 1];
for (num of sortNums) {
    if (num > 5) {
        console.log(num);
    }
}

// Ex 16
const person = {
    name: "Dan",
    age: 25,
};
console.log(person);

// Ex 17
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);

// Ex 18
person.city = "Jerusalem";
person.name = "Jane";
console.log(person);

// Ex 19
delete person.age;
console.log("age" in person);

// Ex 20
const student = {
    name: "Yael",
    grades: [90, 80, 100],
};
console.log(student.grades[0]);
student.grades.push(95);
student.grades.splice(1, 1);
console.log(student.grades);

// Ex 21
const product = {
    name: "Laptop",
    price: 3500,
    inStock: true,
};

for (const prop in product) {
    console.log(`${prop}: ${product[prop]}`);
}

// Ex 22
const user = {
    username: "admin",
    role: "manager",
    active: true,
};
let keys = [];
let values = [];
for (const [key, value] of Object.entries(user)) {
    keys.push(key);
    values.push(value);
    console.log(`${key} = ${value}`);
}
console.log(keys);
console.log(values);

// Ex 23
const order = {
    id: 101,
    customer: {
        name: "Roi",
        address: {
            city: "Tel aviv",
            zip: "12345",
        },
    },
};

console.log(order.customer.address.city);
order.customer.address.zip = "67891";
order.customer.phone = "043720462";
delete order.customer.address.city;
console.log(order);

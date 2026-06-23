// Ex 1
const nums = [1, 2, 3, 4, 5];
console.log(nums.map((num) => num * 2));

// Ex 2
const words = ["hello", "world"];
console.log(words.map((word) => word.toUpperCase()));

// Ex 3
const prices = [23, 57, 100, 234, 532];
console.log(prices.map((price) => price * 1.17));

// Ex 4
const nums1 = [1, 2, 3, 4, 5, 6];
console.log(nums1.filter((num) => num % 2 === 0));

// Ex 5
const words1 = ["hi", "hello", "cat", "javascript"];
console.log(words1.filter((word) => word.length > 3));

// Ex 6
const users = [
    { name: "Avi", age: 17 },
    { name: "Dana", age: 22 },
];
console.log(users.filter((user) => user.age > 18));

// Ex 7
console.log(users.map((user) => user.name));

// Ex 8
const filtered = prices.filter((price) => price > 100);
console.log(filtered.map((price) => price * 1.1));

// Ex 9
const nums2 = [10, 20, 30];
console.log(nums2.reduce((acc, current) => acc + current, 0));

// Ex 10
console.log(nums2.reduce((acc, current) => acc * current, 1));

// Ex 11
const words2 = ["a", "b", "c"];
console.log(words2.reduce((acc, current) => (acc += current), ""));

// Ex 12
const ages = [23, 12, 54, 37];
console.log(ages.reduce((acc, current) => (acc + current) / ages.length));

// Ex 13
console.log(
    nums.reduce(
        (acc, current) => {
            if (current % 2 === 0) {
                acc.even++;
            } else {
                acc.odd++;
            }
            return acc;
        },
        { even: 0, odd: 0 },
    ),
);

// Ex 25
const nums4 = [4, 12, 3, 96, 45];
console.log(nums4.sort((a, b) => b - a));

// Ex 29
console.log(nums.splice(1, 2));

// Ex 32
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [6, 7, 8],
];
console.log(matrix.flat());

// Ex 36
console.log(
    nums1
        .filter((num) => num % 2 === 0)
        .map((num) => num * 2)
        .reduce((acc, current) => acc + current, 0),
);

// Ex 38
const objList = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];
console.log(
    objList.reduce((acc, current) => {
        const key = current.type;

        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(current);

        return acc;
    }, {}),
);

// Ex 39
const values = ["a", "r", "v", "c", "l", "a"];
console.log(values.some((item, index) => values.indexOf(item) !== index));

// Ex 41
const products = [
    { name: "Laptop", price: 800, inStock: true, category: "tech" },
    { name: "Phone", price: 400, inStock: false, category: "tech" },
    { name: "Shirt", price: 50, inStock: true, category: "fashion" },
];
console.log(
    products
        .filter((product) => product.inStock === true)
        .filter((product) => product.price > 100)
        .sort((product) => product.price)
        .map((product) => product.name),
);

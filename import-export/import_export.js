// Ex 1
const math = require("./math.js");
console.log(math.add(3, 5));

// Ex 2
const greet = require("./greet.js");
console.log(greet.greetByName("Yitzi"));

// Ex 3
const obj = require("./object-module.js");
console.log(obj.person);

// Ex 4
const calculator = require("./calculator.js");
console.log(calculator.add(4, 6));
console.log(calculator.multiple(4, 6));

// Ex 5
const utils = require("./utils.js");
console.log(utils.subtract(7, 3));

// Ex 6
const even = require("./even.js");
console.log(even.isEven(34));
console.log(even.isEven(53));

// Ex 7
const users = require("./users.js");
const user = new users.User("Yitzi");
console.log(user);

// Ex 8
const nums = require("./nums.js");
const getSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
console.log(getSum(nums.numbers));

// Ex 9
const advancedMath = require("./advancedMath.js");
console.log(advancedMath.add(5, 2));
console.log(advancedMath.subtract(5, 2));

// Ex 10
const app = require("./app.js");
console.log(app.sendInfo);
console.log(app.sendError);

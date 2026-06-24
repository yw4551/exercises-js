// Ex 1
import { sum } from "./math.js";

console.log(sum(6, 3));

// Ex 2
import { greetByName } from "./greet.js";
console.log(greetByName("Jane"));

// Ex 3
import { PI } from "./pi.js";
console.log(PI);

// Ex 4
import multiple from "./math.js";
console.log(multiple(3, 4));

// Ex 5
import { divide } from "./calculator.js";
console.log(divide(6, 3));

// Ex 6
import User from "./users.js";
const user = new User("Jo");
console.log(user);

// Ex 7
import { Car } from "./cars.js";
const car = new Car("Kia", "black");
console.log(car);

// Ex 8
import NUM, { mul } from "./advanced.js";
console.log(multiple(9, NUM));

// Ex 9
import { result } from "./app.js";
console.log(result);

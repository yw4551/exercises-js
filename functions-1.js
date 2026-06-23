// Ex 1
function helloName(name) {
    return `Hello ${name}`;
}

console.log(helloName("Moshe"));

// Ex 2
function sumNums(x, y) {
    return x + y;
}

console.log(sumNums(4, 7));

// Ex 3
function isEqual(num) {
    return num % 2 === 0;
}

console.log(isEqual(3));
console.log(isEqual(6));

// Ex 4
function getArrFirstValue(arr) {
    return arr[0];
}

console.log(getArrFirstValue([1, 2, 3, 4, 5]));
console.log(getArrFirstValue([4, 2, 7, 8, 3]));

// Ex 5
function upperCase(str) {
    return str.toUpperCase();
}

console.log(upperCase("Hello"));

// Ex 6
// because that the first print is in a block and it uses a let keyword so it gets the block scope and the second print is in the global scope so it gets the global variable.

// Ex 7
function test() {
    y = 10;
    return y;
}

console.log(test());

// Ex 8
// 1

// Ex 9
function a() {
    let variable = 2;
}

//console.log(variable);

// Ex 10
let count = 0;

function add() {
    let count = 0;
    count++;
}

// Ex 11
function sumArray(arr) {
    let total = 0;
    for (num of arr) {
        total += num;
    }
    return total;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Ex 12
function square(num) {
    return Math.pow(num, 2);
}

function getSquareVal(num) {
    return square(num);
}

console.log(getSquareVal(2));

// Ex 13
// 10 because the function gets a variable and declares them once again.

// Ex 14
function isEven(arr) {
    let result = [];
    for (num of arr) {
        if (num % 2 == 0) {
            result.push(num);
        }
    }
    return result;
}

console.log(isEven([1, 2, 3, 4, 5]));

// Ex 15
// Because the total variable is in the global scope we can access it from all points and that is not safe because you can by mistake to something you don't want

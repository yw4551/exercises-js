// Ex 1
function productOf3(num) {
    return num * 3;
}

console.log(productOf3(4));

// Ex 2
function getLenStr(str) {
    return str.length;
}

console.log(getLenStr("Hello"));

// Ex 3
function getNumType(num) {
    if (num < 0) {
        return `${num} is negative`;
    } else if (num == 0) {
        return "Equal to 0";
    } else {
        return `${num} is positive`;
    }
}

console.log(getNumType(0));
console.log(getNumType(4));
console.log(getNumType(-1));

// Ex 4
function getLargerNum(x, y) {
    if (x > y) {
        return x;
    } else if (x < y) {
        return y;
    } else {
        return "They are equal";
    }
}

console.log(getLargerNum(2, 4));
console.log(getLargerNum(7, 2));
console.log(getLargerNum(2, 2));

// Ex 5
function getLenArr(arr) {
    return arr.length;
}

console.log(getLenArr([1, 2, 3, 4, 5, 6]));

// Ex 6
// 7 because the a variable is defined in the global scope.

// Ex 7
// Error because a was defined only in the function block and we are trying to get it's value in the global scope

// Ex 8
// 10 because the variable was changed in the function.

// Ex 9
// 4 because the variable is in the global scope so we can access it from all places.

// Ex 10
function print() {
    let message = "Hi";
    console.log(message);
}

print();

// Ex 11
function getSmallestNum(arr) {
    return Math.min(...arr);
}

console.log(getSmallestNum([5, 2, 9, 8]));

// Ex 12
function checkDivided(x, y) {
    if (y == 0 || x % y != 0) {
        return false;
    } else {
        return true;
    }
}

console.log(checkDivided(4, 0));
console.log(checkDivided(4, 2));
console.log(checkDivided(4, 3));

// Ex 13
function joinStr(arr) {
    return arr.toString();
}

console.log(joinStr(["hello", "world"]));

// Ex 14
// 5 15

// Ex 15
function printNums(n) {
    for (let i = 0; i < n; i++) {
        console.log(i + 1);
    }
}

printNums(5);

// Ex 16
function sortDoubles(arr) {
    let result = [];
    for (const val of arr) {
        if (!result.includes(val)) {
            result.push(val);
        }
    }
    return result;
}

console.log(sortDoubles([1, 2, 3, 2, 4, 5, 1, 5]));

// Ex 17
// in the original code the sum variable is uot of the scope of the function and it never restarts.
function add(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(add([1, 2]));
console.log(add([3, 4]));

// Ex 18
function countEvens(arr) {
    let count = 0;
    for (const num of arr) {
        if (num % 2 == 0) {
            count += 1;
        }
    }
    return count;
}

console.log(countEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Ex 19
// 2

// Ex 20
function getPrice(price) {
    let discount = 0.1;
    return price - price * discount;
}

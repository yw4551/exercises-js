// Ex 1
const age = 20;

if (age >= 18) {
    console.log("adult");
} else {
    console.log("Minor");
}


// Ex 2
const number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Not even");
}


// Ex 3
const isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Please log in!");
}


// Ex 4
const num = -5;

if (num > 0) {
    console.log(`${num} is positive.`);
} else if (num === 0) {
    console.log(`${num} is 0.`);
} else {
    console.log(`${num} is negative.`);
    
}


// Ex 5
const a = 10;
const b = 20;

if (a > b) {
    console.log(`${a} is grater then ${b}.`);
} else if (b > a) {
    console.log(`${b} is grater then ${a}.`);
} else {
    console.log(`${a} and ${b} are equal.`);
}


// Ex 6
const password = "1234";

if (password === "1234") {
    console.log("You are logged in.");
} else {
    console.log("Wrong password. Try again.");
}


// Ex 7
const x = 15;

if (10 <= x && x <= 20) {
    console.log(`${x} is between 10 and 20.`);
} else if (x < 10) {
    console.log(`${x} is less then 10.`);
} else {
    console.log(`${x} is grater then 20.`);
}


// Ex 8
const grade = 83;

if (grade >= 90) {
    console.log("Excellent.");
} else if (75 <= grade && grade <= 89) {
    console.log("Amazing.");
} else if (60 <= grade && grade <= 74) {
    console.log("Passes.");
} else {
    console.log("Failed.");
}


// Ex 9
const temp = 28;

if (temp > 30) {
    console.log("I'ts very hot please drink.");
} else if (20 < temp && temp < 30) {
    console.log("I'ts nice.");
} else {
    console.log("I'ts cold stay worm.");
}


// Ex 10
const age2 = 20;
const hasID = true;

if (age2 >= 18 && hasID) {
    console.log("Enter");
} else {
    console.log("You are denied.");
}


// Ex 11
const isAdmin = false;
const isManager = true;

if (isAdmin || isManager) {
    console.log("Enter");
} else {
    console.log("You are denied.");
}


// Ex 12
const hasCard = false;

if (!hasCard) {
    console.log("You are denied.");
} else {
    console.log("Enter");
}


// Ex 13
const name = "";

if (!name) {
    console.log("Guest");
} else {
    console.log(name);
}


// Ex 14
const arr = [];

if (arr.length === 0) {
    console.log("Tha array is empty.");
} else {
    console.log("The array is not empty.");
}


// Ex 15
const x1 = "5";
const y1 = 5;

if (x1 == y1 && x1 === y1) {
    console.log("The difference is that == checks only the value while === checks also the type.");
}


// Ex 16
const username = "admin";
const password1 = "1234";

if (username === "admin" && password1 === "1234") {
    console.log("Enter.");
} else {
    console.log("You are denied.");
}


// Ex 17
const age3 = 67;

if (age3 < 18) {
    console.log("Child discount.");
} else if (age3 > 65) {
    console.log("Old discount.");
} else {
    console.log("No discount.");
}


// Ex 18
const day = "Monday";

switch (day) {
    case "Sunday":
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Workday.");
        break;
    case "Friday":
    case "Saturday":
        console.log("Weekend.");
}


// Ex 19
const total = 250;

if (total >= 300) {
    console.log("Free delivery.");
} else if (total >= 150 && total < 300) {
    console.log("Delivery 20 NIS.");
} else {
    console.log("Delivery 40 NIS.");
}


// Ex 20
const role = "editor";

switch (role) {
    case "admin":
        console.log("All access.");
        break;
    case "editor":
        console.log("Edit only.");
        break;
    case "viewer":
        console.log("Read only.");
        break;
    default:
        console.log("No access.");
}
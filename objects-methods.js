import input from "analiza-sync";

// Ex 1
const name = input("Enter your name: ");
console.log(name.toUpperCase());

// Ex 2
const text = input("Enter some text: ");
console.log(text.trim());

// Ex 3
const email = input("Enter your email address: ");
console.log(email.includes("@"));

// Ex 4
console.log(email.endsWith(".com"));

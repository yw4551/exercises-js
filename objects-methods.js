import input from "analiza-sync";

// Ex 1
function lowerCaseName() {
    const name = input("Enter your name: ");
    return name.toLowerCase();
}

// console.log(lowerCaseName());

// Ex 2
function trimWhiteSpaces() {
    const text = input("Enter some text: ");
    return text.trim();
}

// console.log(trimWhiteSpaces());

// Ex 3
function validateEmail() {
    const email = input("Enter your email address: ");
    return email.includes("@");
}

// console.log(validateEmail());

// Ex 4
function domainEnd() {
    const domain = input("Enter your domain address: ");
    return domain.endsWith(".com");
}

// console.log(domainEnd());

// Ex 5
function trimFirstName(fullName) {
    const index = fullName.lastIndexOf(" ");
    return fullName.slice(index).trim();
}

console.log(trimFirstName("Yitzi Weiner"));

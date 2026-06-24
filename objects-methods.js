// Ex 1
function lowerCaseName(name) {
    return name.toLowerCase();
}

console.log(lowerCaseName("AllCe"));

// Ex 2
function trimWhiteSpaces(str) {
    return str.trim();
}

console.log(trimWhiteSpaces("   hello world    "));

// Ex 3
function validateEmail(email) {
    return email.includes("@");
}

console.log(validateEmail("yitziw123@gmail.com"));

// Ex 4
function domainEnd(domain) {
    return domain.endsWith(".com");
}

console.log(domainEnd("www.google.com"));

// Ex 5
function trimFirstName(fullName) {
    const index = fullName.lastIndexOf(" ");
    return fullName.slice(index).trim();
}

console.log(trimFirstName("Yitzi Weiner"));

// Ex 6
function splitFullName(fullName) {
    return fullName.split(" ");
}

console.log(splitFullName("Yitzi Weiner"));

// Ex 7
function bePositive(str) {
    return str.replace("bad", "good");
}

console.log(bePositive("You are so bad!"));

// Ex 8
function countA(str) {
    const list = str.split("a");
    return list.length - 1;
}

console.log(countA("How are you today?"));

// Ex 9
function startWithJS(str) {
    return str.startsWith("JS");
}

console.log(startWithJS("JS is awesome."));

// Ex 10
function getFirst10Chars(str) {
    return str.slice(0, 10);
}

console.log(getFirst10Chars("Tell me what is your name?"));

// Ex 11
function addPadding(num) {
    return String(num).padStart(5, 0);
}

console.log(addPadding(42));

// Ex 12
function repeatStr(str, times) {
    return str.repeat(times);
}

console.log(repeatStr("hi", 3));

// Ex 13
function toTitle(str) {
    const list = str.trim().split(/\s+/);
    const final = list.map((val) => val[0].toUpperCase() + val.slice(1));
    return final.join(" ");
}

console.log(toTitle("john doe"));

// Objects
// Ex 1
const keys = (obj) => Object.keys(obj);
console.log(keys({ name: "Yitzi", age: 29 }));

// Ex 2
const values = (obj) => Object.values(obj);
console.log(values({ name: "Yitzi", age: 29 }));

// Ex 3
const items = (obj) => {
    Object.entries(obj).forEach(([key, value]) =>
        console.log(`${key}: ${value}`),
    );
};
items({ name: "Yitzi", age: 29 });

// Ex 4
const final = (obj) => {
    const grades = Object.values(obj);
    const total = grades.reduce((acc, current) => acc + current, 0);
    return total / grades.length;
};

console.log(final({ math: 80, english: 90, science: 70 }));

// Ex 5
const mergeObjs = (obj1, obg2) => Object.assign(obj1, obg2);

console.log(mergeObjs({ name: "Yitzi" }, { age: 29 }));

// Ex 6
const mergeObjWithChange = (obj1, obg2) => Object.assign(obj1, obg2);

console.log(mergeObjWithChange({ theme: "light", lang: "en" }, { lang: "he" }));

// Ex 7
const hasKey = (obj, key) => Object.hasOwn(obj, key);

console.log(hasKey({ name: "Yitzi", age: 29 }, "age"));

// Ex 8
const configObj = (obj) => {
    // Object.freeze(obj);
    obj.name = "Dave";
    return obj;
};

console.log(configObj({ name: "Yitzi", age: 29 }));

// Ex 9
const fromArrayToObj = (arr) => Object.fromEntries(arr);

console.log(
    fromArrayToObj([
        ["name", "Alice"],
        ["age", 25],
    ]),
);

// Ex 10
const finalPrice = (obj) => {
    const list = Object.entries(obj);
    const add10 = list.map(([key, price]) => [key, price * 0.9]);
    return Object.fromEntries(add10);
};

console.log(finalPrice({ apple: 10, banana: 5, mango: 20 }));

// Ex 11
const isNums = (obj) => {
    const list = Object.entries(obj);
    const final = list.filter(([key, value]) => typeof value === "number");
    return Object.fromEntries(final);
};
console.log(isNums({ name: "Yitzi", age: 29 }));

// Ex 12
function copyObj(obj) {
    return { ...obj };
}

console.log(copyObj({ name: "Yitzi", age: 29 }));

// Ex 13
const checkDouble = (obj1, obg2) =>
    Object.keys(obj1).length === Object.keys(obg2).length &&
    Object.keys(obj1).every((key) => Object.keys(obg2).includes(key));

console.log(
    checkDouble({ name: "Yitzi", age: 29 }, { name: "Yitzi", age: 29 }),
);
console.log(
    checkDouble({ phone: "0473975037", age: 29 }, { name: "Yitzi", age: 29 }),
);

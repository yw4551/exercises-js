// Ex 1
const great = " hello world ";
const trimmed = great.trim();
console.log(trimmed);

// Ex 2
const email = "user@gmail.com";
const strudel = email.includes("@");
console.log(strudel);

// Ex 3
const word = "javascript";
const toUpper = word.toUpperCase();
console.log(toUpper);

// Ex 4
const upper = "HELLO WORLD";
const toLower = upper.toLowerCase();
console.log(toLower);

// Ex 5
const text = "שלום עליכם";
const textLength = text.length;
console.log(textLength);

// Ex 6
const string = "JavaScript";
const sliced = string.slice(0, 4);
console.log(sliced);

// Ex 7
const sliced2 = string.slice(-6);
console.log(sliced2);

// Ex 8
const url = "https://example.com";
console.log(url.startsWith("https"));

// Ex 9
const webPage = "mywebsite.org";
console.log(webPage.endsWith(".com"));

// Ex 10
const replaced = text.replace("שלום", "הי");
console.log(replaced);

// Ex 11
const fruit = "banana";
console.log(fruit.replaceAll("a", "o"));

// Ex 12
const nums = "one two three";
console.log(nums.split(" "));

// Ex 13
const words = "apple,banana,grape";
console.log(words.split(",", 2));

// Ex 14
console.log(fruit.indexOf("a"));

// Ex 15
console.log(fruit.lastIndexOf("a"));

// Ex 16
const num = "7";
console.log(num.padStart(3, "0"));

// Ex 17
const great1 = "hi";
console.log(great1.padEnd(5, "*"));

// Ex 18
const word1 = "ha";
console.log(word1.repeat(3));

// Ex 19
const great2 = "Hello";
console.log(great2.charAt(0));

// Ex 20
console.log(great2.at(-1));

// Ex 21
const str1 = "שלום";
const str2 = "עולם";
console.log(str1.concat(" ", str2));

// Ex 22
console.log(string.substring(2, 6));

// Ex 23
const str3 = "AdminPanel";
console.log(str3.toUpperCase().includes("admin".toUpperCase()));

// Ex 24
const great3 = " hello ";
console.log(great3.trimStart());

// Ex 25
console.log(great3.trimEnd());

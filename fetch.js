// // Ex 1
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(`HTTP error: ${res.status}`);
//         }
//         return res.json();
//     })
//     .then((post) => console.log(post.title))
//     .catch((err) => console.error(`Failed: ${err.message}`));

import { error } from "console";
import { url } from "inspector";

// // Ex 2
// fetch("https://jsonplaceholder.typicode.com/notfound")
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(`HTTP error: ${res.status}`);
//         }
//         return res.json();
//     })
//     .then((post) => console.log(post))
//     .catch((err) => console.error(`Failed: ${err.message}`));

// // Ex 3
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(`HTTP error: ${res.status}`);
//         }
//         return res.json();
//     })
//     .then((posts) => {
//         for (const post of posts) {
//             console.log(post.title);
//         }
//     })
//     .catch((err) => console.error(`Failed: ${err}`));

// // Ex 4
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//         title: "New title",
//         body: "This is a post.",
//         userid: 1,
//     }),
// })
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.error(res));

// // Ex 5
// const getUserId = (id) => {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
//         (res) => {
//             if (!res.ok) {
//                 throw new Error(`HTTP error: ${res.status}`);
//             }
//             return res.json();
//         },
//     );
// };

// // Ex 6
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((post) => {
//         return getUserId(post.userId).then((user) => {
//             return {
//                 username: user.username,
//                 title: post.title,
//             };
//         });
//     })
//     .then((data) => console.log(`${data.username} - ${data.title}`))
//     .catch((err) => console.error(err));

// // Ex 7
// const urls = [
//     "https://jsonplaceholder.typicode.com/users/1",
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/todos/1",
// ];

// const result = urls.map((url) => fetch(url).then((res) => res.json()));

// Promise.all(result)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// // Ex 8
// const fetchWithTimeout = () => {
//     const controller = new AbortController();
//     const timeout = setTimeout(() => controller.abort(), 3000);

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         signal: controller.signal,
//     })
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error(`HTTP error: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then((data) => console.log(data))
//         .catch((err) => {
//             if (err.name === "AbortError") {
//                 console.error("Request cancelled");
//             } else {
//                 console.error(error);
//             }
//         })
//         .finally(() => {
//             clearTimeout(timeout);
//         });
// };

// fetchWithTimeout();

// Ex 9
const fetchWithRetry = async (url, retries) => {
    for (const i = 0; i < retries; i++) {
        try {
            const res = await fetch(url);
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            if (i === retries - 1) {
                throw err;
            }
        }
    }
    throw new Error("Failed after all tries");
};

// Ex 10
const cache = {};

async function cachedFetch(url) {
    if (cache[url]) {
        console.log("From Cache");
        return cache[url];
    }

    console.log("From Network");
    const response = await fetch(url);
    const data = await response.json();

    cache[url] = data;
    return data;
}

async function runTest() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    console.log(await cachedFetch(url));
    console.log(await cachedFetch(url));
}

runTest();

// Ex 5
async function getToDo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await res.json();
    console.log(todo);
}

getToDo();

// Ex 6
async function returnDone() {
    return "Done";
}

returnDone().then(console.log);

// Ex 7
async function square(num) {
    return num * num;
}

square(4).then(console.log);

// Ex 14
async function fetchTowApis() {
    const first = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const second = await fetch("https://jsonplaceholder.typicode.com/users/1");
    first.json().then(console.log);
    second.json().then(console.log);
}

fetchTowApis();

// Ex 15
async function getTowApi() {
    const res = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts/1"),
        fetch("https://jsonplaceholder.typicode.com/users/1"),
    ])
        .then((res) => Promise.all(res.map((api) => api.json())))
        .then(console.log);
}

getTowApi();

// Ex 16
async function getTowApiWithErrorHandling() {
    try {
        const res = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/1"),
            fetch("https://jsonplaceholder.typicode.com/users/1"),
        ])
            .then((res) => Promise.all(res.map((api) => api.json())))
            .then(console.log);
    } catch (err) {
        console.error(err);
    }
}

getTowApiWithErrorHandling();

// Ex 18
async function getApis(urls) {
    const result = [];
    for (url of urls) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            result.push({ url: data });
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }
}

getApis([]);

// Ex 19
async function getAllAtOnce(urls) {
    try {
        const res = await Promise.all(urls.map((url) => fetch(url)));
        const data = await Promise.all((url) => url.json());
        return data;
    } catch (err) {
        console.error(err);
    }
}

import fs from "fs";

// Ex 1
fs.writeFile("data/message.txt", "Hello from Node fs!", (err) => {
    if (err) return console.log(err);
    console.log("File was created successfully");
});

// Ex 2
fs.readFile("data/message.txt", "utf-8", (err, data) => {
    if (err) return console.log(err);
    console.log(data);
});

// Ex 3
console.log("Start");
fs.readFile("data/message.txt", "utf-8", (err, data) => {
    if (err) return console.log(err);
    console.log(data);
});
console.log("End");

// Ex 4
fs.readFile("data/mess.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Could not read file");
        console.log(err);
        return;
    }
    console.log(data);
});

// Ex 5
function callback(err, content) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(content);
}

function readTextFile(filePath, callback) {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) return callback(err);
        callback(null, data);
    });
}

readTextFile("data/message.txt", callback);

// Ex 6
fs.appendFile("data/message.txt", "\nThis line was added later.", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.readFile("data/message.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(data);
    });
});

// Ex 7
fs.writeFile("data/log.txt", "Log started", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.appendFile(
        "data/log.txt",
        "\nFirst action completed\nSecond action completed",
        (err) => {
            if (err) {
                console.log(err);
                return;
            }

            fs.readFile("data/log.txt", "utf-8", (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log(data);
            });
        },
    );
});

// Ex 8
fs.mkdir("data/users", { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Users folder created");
});

// Ex 9
fs.exists("data/users", (err) => {
    fs.writeFile("data/users/user1.txt", "Name: David\nAge: 25", (err) => {
        if (err) {
            console.log(err);
            return;
        }

        fs.readFile("data/users/user1.txt", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(data);
        });
    });
});

// Ex 10
fs.readdir("data", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});

// Ex 11
fs.writeFile("data/step1.txt", "Step 1 completed.", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.writeFile("data/step2.txt", "Step 2 completed.", (err) => {
        if (err) {
            console.log(err);
            return;
        }

        fs.writeFile("data/step3.txt", "Step 3 completed.", (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("All steps completed");
        });
    });
});

// Ex 12
fs.readFile("data/step1.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.readFile("data/step2.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        fs.readFile("data/step3.txt", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(data);
        });
        console.log(data);
    });
    console.log(data);
});

// Ex 13
let data1;
let data2;

fs.writeFile("data/report-title.txt", "Daily Report", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.writeFile("data/report-body.txt", "Everything is working", (err) => {
        if (err) {
            console.log(err);
            return;
        }

        fs.readFile("data/report-title.txt", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            data1 = data;

            fs.readFile("data/report-body.txt", "utf-8", (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                data2 = data;

                console.log(`${data1}\n${data2}`);
            });
        });
    });
});

// Ex 14
fs.writeFile("data/original.txt", "Original file content", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.readFile("data/original.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        fs.writeFile("copy.txt", data, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
});

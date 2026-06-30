import fs from "fs";
import fsp from "fs/promises";

// Ex 1
const writeFileAsPromise = (filePath, content) => {
    return new Promise((res, rej) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) rej(err);
            res("File written successfully.");
        });
    });
};

writeFileAsPromise("data/message.txt", "Hello World")
    .then(console.log)
    .catch(console.error);

// Ex 2
const readFileAsPromise = (filePath) => {
    return new Promise((res, rej) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) rej(err);
            res(data);
        });
    });
};

readFileAsPromise("data/message.txt").then(console.log).catch(console.error);

// Ex 3
const readFileAndCount = (filePath) => {
    return new Promise((res, rej) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) rej(err);
            res(data.length);
        });
    });
};

readFileAndCount("data/message.txt").then(console.log).catch(console.error);

// Ex 4
const appendFileAsPromise = (filePath, content) => {
    return new Promise((res, rej) => {
        fs.appendFile(filePath, content, (err) => {
            if (err) rej(err);
            res("Text added successfully.");
        });
    });
};

writeFileAsPromise("data/step1.txt", "This is step 1")
    .then(() => console.log("Step 1 done."))
    .then(() => writeFileAsPromise("data/step2.txt", "This is step 2"))
    .then(() => console.log("Step 2 done."))
    .then(() => writeFileAsPromise("data/step3.txt", "This is step 3"))
    .then(() => console.log("Step 3 done."))
    .catch(console.error);

// Ex 5
let fileData3;
let fileData2;

readFileAsPromise("data/step3.txt")
    .then((data) => {
        fileData3 = data;
        return readFileAsPromise("data/step2.txt");
    })
    .then((data) => {
        fileData2 = data;
        return readFileAsPromise("data/step1.txt");
    })
    .then((data) => {
        console.log(data);
        console.log(fileData2);
        console.log(fileData3);
    });

// Ex 6
writeFileAsPromise("data/report-title.txt", "Daily Report")
    .then(() =>
        writeFileAsPromise("data/report-body.txt", "Everything is working"),
    )
    .then(() => {
        return Promise.all([
            readFileAsPromise("data/report-title.txt"),
            readFileAsPromise("data/report-body.txt"),
        ]);
    })
    .then((result) =>
        writeFileAsPromise("data/final-report.txt", result.join("\n")),
    )
    .catch((err) => console.log(err));

// Ex 7
fsp.readFile("data/final-report.txt", "utf-8")
    .then((result) => console.log(result))
    .catch((err) => console.error(err));

// Ex 8
fsp.writeFile("data/report-title.txt", "Daily Report")
    .then(() => fsp.writeFile("data/report-body.txt", "Everything is working"))
    .then(() => {
        return Promise.all([
            fsp.readFile("data/report-title.txt", "utf-8"),
            fsp.readFile("data/report-body.txt", "utf-8"),
        ]);
    })
    .then((result) => fsp.writeFile("data/final-report.txt", result.join("\n")))
    .catch((err) => console.log(err));

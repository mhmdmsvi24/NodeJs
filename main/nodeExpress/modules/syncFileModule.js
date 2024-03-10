// we can do file module async or sync
const fs = require("fs");

// reading files params(path, encoding)
const first = fs.readFileSync("./content/test.txt", "utf8");

const second = fs.readFileSync("./content/subContent/subTest.txt", "utf8");

// writing files, it'll create file if it doesn't exist
// and if it does it'll over write it

fs.writeFileSync('./content/result.txt', `Hello this is the result ${first} \n${second}`, {flag: 'a'});

// the flag: a so the text wont over write it insread it'll append the text.

const myResult = fs.readFileSync("./content/reslut.txt", "utf8");
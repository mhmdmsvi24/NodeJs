const fs = require("fs");

// for async approach we'll add callback function
const file_1 = fs.readFile("path", "utf8", (err, res) => {
  if (err) {
    return console.log(err);
  }
  
  // here we read multiple files
  const first = res;
  readFile("path/second.txt", "utf8", (err, res) => {
    if (err) {
      return console.log(err);
    }
    const second = res;
    return second;
  });
});

// the result won't be text if we miss utf8 encoding

// we also have write file so I dont need to show it

// path module is required for crossplatform paths so 
// if we run it on other platforms it wont crash it's
// always recommended to use dynamic path
const path = require('path');

// sep prop return platform independent value
const myPath = path.sep;

// using Join: we can use path.join('/misc', 'subfolder', 'file.txt') so it will return correct path for it

// if we want base name we can use:
const base = path.basename(myPath);

// absolute path: resolve method can accept many params for rest of the path
const absPath = path.resolve(__dirname);

// Require the simple-exist module
var exists = require('simple-exist');

// Synchronous example
// Check if the file exists and log if it does
if(exists.existsSync("file.txt") {
    console.log("File exists!");
} else {
    console.log("File doesn't exist!");
}

// Asynchronous example
// Check if the file exists and log if it does
exists.exists("file.txt", function(data) {
    if(data) {
        console.log("File exists!");
    } else {
        console.log("File doesn't exist!");
    }
});
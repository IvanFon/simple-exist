# simple-exist
Simple functions to check if a file exists in both sync and async using Node.js.

## Usage

### existsSync(file);

Works synchronously. Pass in the filename as a string. The function will return true or false.
#### Example
```Javascript
var exists = require('simple-exist');

if(exists.existsSync("file.txt")) {
    console.log("File exists!");
} else {
    console.log("File doesn't exist!");
}
```

### exists(file, callback);

Works asynchronously. Pass in the filename as a string and a callback function. The callback will receive a boolean (true if file exists, false if it doesn't) or an error.
#### Example
```Javascript
var exists = require('simple-exist');

// Check if the file exists and log if it does
exists.exists("file.txt", function(data) {
    if(data) {
        console.log("File exists!");
    } else {
        console.log("File doesn't exist!");
    }
});
```
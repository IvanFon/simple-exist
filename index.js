// Use filesystem
var fs = require("fs");

// Asynchronous
module.exports.exists = function(file, callback) {
    fs.stat(file, function(err, stat) {
        if (err === null) {
            // Exists
            callback(true);
        } else if (err.code == 'ENOENT') {
            // Doesn't exist
            callback(false);
        } else {
            // Error
            callback(err);
        }
    });
};

// Synchronous
module.exports.existsSync = function(file) {
    try {
        // Returns true if exists
        return fs.statSync(file).isFile();
    } catch (err) {
        // Doesn't exist
        return false;
    }
};
var fs = require("fs");

function asyncExist(file, callback) {
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

function syncExist(file) {
    try {
        // Returns true if exists
        return fs.statSync(file).isFile();
    } catch (err) {
        // Doesn't exist
        return false;
    }
}

// main function
module.exports = syncExist;

// Asynchronous
module.exports.exists = asyncExist;

// Synchronous
module.exports.existsSync = syncExist;

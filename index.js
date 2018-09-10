const fs = require('fs');

// Async
module.exports.exists = (file, callback) => {
  fs.access(file, fs.constants.F_OK, err => {
    if (err)
      callback(false);
    else
      callback(true);
  });
};

// Sync
// Included for backwards compatibility
module.exports.existsSync = file => fs.existsSync(file);

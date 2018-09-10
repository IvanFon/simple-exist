# simple-exist
Simple functions to check if a file exists both synchronously and asynchronously.

## Install

Use your favourite Node.js package manager:

```
yarn add simple-exist
npm install simple-exist
```

## Usage

### exists(file, callback)

Works asynchronously. Pass in a filename as a string and get either `true` or `false` as a callback argument.

#### Example

```
const exists = require('simple-exist').exists;

exists('file', res => {
  if (res) {
    // File exists
  } else {
    // File does not exist
  }
});
```

### existsSync(file)

Works synchronously. Pass in the filename as a string. The function will return either `true` or `false`.

**Note: Node.js' `fs.existsSync` is no longer deprecated, and you should use that instead. This function has been kept in this module for backwards compatability.**

#### Example

```
const exists = require('simple-exist').existsSync;

if (existsSync('file')) {
  // File exists
} else {
  // File does not exist
}
```

## Testing

To run tests, install development dependencies (`yarn -D`, `npm i -D`) and run the `test` script (`yarn run test`, `npm run test`).

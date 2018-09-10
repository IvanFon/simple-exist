const assert = require('assert');
const exists = require('../index.js');

describe('#exists()', () => {
  it('should return true when the file exists', done => {
    exists.exists('test', res => {
      assert.equal(res, true);
      done();
    });
  });

  it('should return false when the file does not exist', done => {
    exists.exists('abc', res => {
      assert.equal(res, false);
      done();
    });
  });
});

describe('#existsSync()', () => {
  it('should return true when the file exists', () => {
    assert.equal(exists.existsSync('test'), true);
  });

  it('should return false when the file does not exist', () => {
    assert.equal(exists.existsSync('abc'), false);
  });
});

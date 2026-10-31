const assert = require('assert');
const { add } = require('./math.js');

try {
  assert.strictEqual(add(1, 2), 3);
  assert.strictEqual(add(5, 7), 12);
  console.log('All tests passed!');
} catch (error) {
  console.error('Test failed:', error.message);
  process.exit(1);
}

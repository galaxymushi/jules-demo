const assert = require('assert');
const math = require('./math');

assert.strictEqual(math.subtract(5, 3), 2, "subtract(5, 3) should equal 2");
assert.strictEqual(math.subtract(10, 4), 6, "subtract(10, 4) should equal 6");

console.log("All tests passed!");

import assert from 'node:assert/strict';

const weakSet = new WeakSet();

const foo = {};
const bar = {};

weakSet
  .add(foo)
  .add(bar);

assert.throws(() => weakSet.add(1), TypeError);

assert.equal(weakSet.has(foo), true);
assert.equal(weakSet.has(bar), true);

assert.equal(weakSet.delete(foo), true);
assert.equal(weakSet.delete(foo), false);
assert.equal(weakSet.delete(1), false);

assert.equal(weakSet.has(foo), false);


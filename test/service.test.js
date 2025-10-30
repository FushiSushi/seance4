import test from 'node:test';
import assert from 'node:assert/strict';
import * as svc from '../services/productService.js';

const SAMPLE = [
  { id: 1, name: 'A', price: 1, quantity: 1, tags: ['x'] },
  { id: 2, name: 'B', price: 2, quantity: 2, tags: ['promo'] }
];

test('add returns new list with incremented id', () => {
  const added = svc.add(SAMPLE, { name: 'C', price: 3, quantity: 3 });
  assert.equal(added.length, 3);
  assert.equal(added[2].id, 3);
  assert.equal(added[2].name, 'C');
});

test('filterByTag returns items with the tag', () => {
  const promo = svc.filterByTag(SAMPLE, 'promo');
  assert.equal(promo.length, 1);
  assert.equal(promo[0].name, 'B');
});

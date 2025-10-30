import test from 'node:test';
import assert from 'node:assert/strict';
import { isExpired } from '../utils/date.js';

test('isExpired returns true for past dates and false for future dates', () => {
  const ref = new Date('2025-10-30T00:00:00Z');
  assert.equal(isExpired('2020-01-01', ref), true);
  assert.equal(isExpired('2999-01-01', ref), false);
});

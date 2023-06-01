'use strict';

const { validateBrackets } = require('../stack-queue-brackets/index');

// Test for Validate Bracket
describe('Validate Brackets Test', () => {
  test('should return true for balanced brackets', () => {
    expect(validateBrackets('')).toBe(true);
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('({[]})')).toBe(true);
  });

  test('should return false for unbalanced brackets', () => {
    expect(validateBrackets('}')).toBe(false);
    expect(validateBrackets(')')).toBe(false);
    expect(validateBrackets('(]')).toBe(false);
    expect(validateBrackets('[')).toBe(false);
    expect(validateBrackets('([)]')).toBe(false);
  });
});

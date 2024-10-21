import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 3, b: 5, action: Action.Subtract, expected: -2 },
  { a: 6, b: 2, action: Action.Subtract, expected: 4 },
  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: -2, b: -3, action: Action.Multiply, expected: 6 },
  { a: -2, b: 3, action: Action.Multiply, expected: -6 },
  { a: 6, b: 3, action: Action.Divide, expected: 2 },
  { a: 1, b: 0, action: Action.Divide, expected: Infinity },
  { a: 0, b: 1, action: Action.Divide, expected: 0 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 2, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 0, b: 3, action: Action.Exponentiate, expected: 0 },
  { a: 2, b: 3, action: 'invalid', expected: null },
  { a: 2, b: 'three', action: Action.Add, expected: null },
  { a: 'two', b: 3, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'given $a and $b with action $action, returns $expected',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});

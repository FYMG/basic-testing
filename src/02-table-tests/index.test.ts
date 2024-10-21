import { simpleCalculator, Action } from './index';
import getRandomNumber from '../helpers/getRandomNumbers';

const testCases = [
  { a: 2, b: 3, action: 'invalid', expected: null },
  { a: 2, b: 3, action: undefined, expected: null },
  { a: 2, b: 'b', action: Action.Add, expected: null },
  { a: 2, b: undefined, action: Action.Add, expected: null },
  { a: 'a', b: 3, action: Action.Add, expected: null },
  { a: undefined, b: 3, action: Action.Add, expected: null },
  { a: undefined, b: undefined, action: undefined, expected: null },
  { a: 1, b: 0, action: Action.Divide, expected: Infinity },
  { a: -1, b: 0, action: Action.Divide, expected: -Infinity },
  { a: 0, b: 1, action: Action.Divide, expected: 0 },
  ...Array.from({ length: 10 }, () => {
    const a = getRandomNumber(-256, 256);
    const b = getRandomNumber(-256, 256);
    return {
      a,
      b,
      action: Action.Add,
      expected: a + b,
    };
  }),
  ...Array.from({ length: 10 }, () => {
    const a = getRandomNumber(-256, 256);
    const b = getRandomNumber(-256, 256);
    return {
      a,
      b,
      action: Action.Subtract,
      expected: a - b,
    };
  }),
  ...Array.from({ length: 10 }, () => {
    const a = getRandomNumber(-256, 256);
    const b = getRandomNumber(-256, 256);
    return {
      a,
      b,
      action: Action.Multiply,
      expected: a * b,
    };
  }),
  ...Array.from({ length: 10 }, () => {
    const a = getRandomNumber(-256, 256);
    const b = getRandomNumber(-256, 256);
    return {
      a,
      b,
      action: Action.Divide,
      expected: a / b,
    };
  }),
  ...Array.from({ length: 10 }, () => {
    const a = getRandomNumber(-16, 16);
    const b = getRandomNumber(-16, 16);
    return {
      a,
      b,
      action: Action.Exponentiate,
      expected: a ** b,
    };
  }),
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

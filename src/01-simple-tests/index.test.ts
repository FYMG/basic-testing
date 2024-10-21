import { simpleCalculator, Action } from './index';
import getRandomNumber from '../helpers/getRandomNumbers';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    for (let i = 0; i < 10; i++) {
      const a = getRandomNumber(-256, 256);
      const b = getRandomNumber(-256, 256);
      expect(simpleCalculator({ a, b, action: Action.Add })).toBe(a + b);
    }
  });

  test('should subtract two numbers', () => {
    for (let i = 0; i < 10; i++) {
      const a = getRandomNumber(-256, 256);
      const b = getRandomNumber(-256, 256);
      expect(simpleCalculator({ a, b, action: Action.Subtract })).toBe(a - b);
    }
  });

  test('should multiply two numbers', () => {
    for (let i = 0; i < 10; i++) {
      const a = getRandomNumber(-256, 256);
      const b = getRandomNumber(-256, 256);
      expect(simpleCalculator({ a, b, action: Action.Multiply })).toBe(a * b);
    }
  });

  test('should divide two numbers', () => {
    for (let i = 0; i < 10; i++) {
      const a = getRandomNumber(-256, 256);
      const b = getRandomNumber(-256, 256) || 1;
      expect(simpleCalculator({ a, b, action: Action.Divide })).toBe(a / b);
    }
    expect(
      simpleCalculator({
        a: getRandomNumber(1, 256),
        b: 0,
        action: Action.Divide,
      }),
    ).toBe(Infinity);
    expect(
      simpleCalculator({
        a: getRandomNumber(-256, -1),
        b: 0,
        action: Action.Divide,
      }),
    ).toBe(-Infinity);
  });

  test('should exponentiate two numbers', () => {
    for (let i = 0; i < 10; i++) {
      const a = getRandomNumber(0, 16);
      const b = getRandomNumber(0, 16);
      expect(simpleCalculator({ a, b, action: Action.Exponentiate })).toBe(
        a ** b,
      );
    }
  });

  test('should return null for invalid action', () => {
    for (let i = 0; i < 10; i++) {
      const a = getRandomNumber(-256, 256);
      const b = getRandomNumber(-256, 256);
      expect(simpleCalculator({ a, b, action: 'invalid' })).toBeNull();
      expect(simpleCalculator({ a, b, action: undefined })).toBeNull();
    }
  });

  test('should return null for invalid arguments', () => {
    for (let i = 0; i < 10; i++) {
      const a = getRandomNumber(-256, 256);
      const b = getRandomNumber(-256, 256);
      expect(simpleCalculator({ a, b: 'b', action: Action.Add })).toBeNull();
      expect(simpleCalculator({ a: 'a', b, action: Action.Add })).toBeNull();
      expect(
        simpleCalculator({ a, b: undefined, action: Action.Add }),
      ).toBeNull();
      expect(
        simpleCalculator({ a: undefined, b, action: Action.Add }),
      ).toBeNull();
    }
  });
});

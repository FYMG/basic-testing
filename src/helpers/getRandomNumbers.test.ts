import getRandomNumber from './getRandomNumbers';

describe('getRandomNumbers', () => {
  test('should return a number within the specified range', () => {
    const min = 1;
    const max = 10;
    const result = getRandomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test('should handle negative ranges', () => {
    const min = -10;
    const max = -1;
    const result = getRandomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test('should return min when min and max are the same', () => {
    const min = 5;
    const max = 5;
    const result = getRandomNumber(min, max);
    expect(result).toBe(min);
  });

  test('should handle large ranges', () => {
    const min = 1;
    const max = 1000000;
    const result = getRandomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});

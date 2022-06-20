const sum = require('./sum.js');

describe('The fuction sum', () => {
  it('should return the result', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('should return an error if a parameter equals a string', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})


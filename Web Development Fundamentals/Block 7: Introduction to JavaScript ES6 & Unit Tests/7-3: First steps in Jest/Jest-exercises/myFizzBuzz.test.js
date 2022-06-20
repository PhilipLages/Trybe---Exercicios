const myFizzBuzz = require('./myFizzBuzz');

describe('The function myFizzBuzz', () => {
  it('should receive parameters and return the correct string or number', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('15')).toBe(false);
  })
})
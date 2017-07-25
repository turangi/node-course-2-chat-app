const expect = require('expect');

// Challenge:
// import isRealString
const {isRealString} = require('./validation');

// Add three test cases

describe (' isRealString', () => {
  it('should reject non-string values', () => {
    let res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let res = isRealString('  ');
    expect(res).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    let res = isRealString(' a b ');
    expect(res).toBe(true);
  });
});

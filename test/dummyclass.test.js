const { Dummy } = require('../src/dummy');


describe('Dummy', () => {
  it('Start a new dummy', () => {
    const dummy = new Dummy();

    expect(dummy.getStatus()).toEqual('running');
  });
});

describe('Dummy 2', () => {
  it.each([
    [1, 'one'],
    [2, 'two'],
  ])("Given ,      When %i,      Then  '%s'", (x, result) => {
    const dummy = new Dummy();
    expect(dummy.getValue(x)).toEqual(result);
  });
});

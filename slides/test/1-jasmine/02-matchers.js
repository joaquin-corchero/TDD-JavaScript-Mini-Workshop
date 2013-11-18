describe('Matchers', function () {
  it('should use toBe matcher when expecting same object', function () {
    var samurai = ['Myamoto', 'Hattori', 'Dangereous Dave'];
    expect(samurai).toBe(samurai);
    expect(samurai).not.toBe(['Myamoto', 'Hattori', 'Dangereous Dave']);
  });
  it('should use toEqual matcher when expecting equivalent object', function () {
    var samurai = ['Myamoto', 'Hattori', 'Dangereous Dave'];
    expect(samurai).toEqual(samurai);
    expect(samurai).toEqual(['Myamoto', 'Hattori', 'Dangereous Dave']);
  });
  it('should use toBeDefined matcher when not expecting undefined', function () {
    var nullSamurai = null,
    undefinedSamurai = undefined,
    evenMoreUndefinedSamurai;
    expect(nullSamurai).toBeDefined();
    expect(undefinedSamurai).not.toBeDefined();
    expect(evenMoreUndefinedSamurai).not.toBeDefined();
  });
  it('should use toBeNull matcher when expecting null', function () {
    var samurai = null, undefinedSamurai;
    expect(samurai).toBeNull();
    expect(undefinedSamurai).not.toBeNull();
  });
});

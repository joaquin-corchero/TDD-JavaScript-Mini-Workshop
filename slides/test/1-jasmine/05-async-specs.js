describe('Testing asynchronous code', function () {
  it('should wait until model.value is not undefined and invoke\
  function passed as runs parameter', function () {
    var model = {
      value: undefined,
      fetchFromServer: function () {
        setTimeout(function () {
          model.value = 123;
        }, 1);
      }
    };
    expect(model.value).not.toBeDefined();
    model.fetchFromServer();
    waitsFor(function () {
      return model.value !== undefined;
    }, 'value was never fetched from the server');
    expect(model.value).not.toBeDefined();//Explain this!!!
    runs(function () {
      expect(model.value).toBe(123);
    });
    expect(model.value).not.toBeDefined();
  });
});

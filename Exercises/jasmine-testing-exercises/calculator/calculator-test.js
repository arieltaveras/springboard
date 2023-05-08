
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 10,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('132.15')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10064,
    years: 10,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('133.00')
});

it('should handle a very long term in years', ()=>{
  const values = {
    amount: 10000,
    years: 100,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('83.34')
});

it('should handle a 2 decimal rate', ()=>{
  const values = {
    amount: 10000,
    years: 100,
    rate: 10.68
  };
  expect(calculateMonthlyPayment(values)).toEqual('89.00')
});
/// etc


it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 300000,
    years: 30,
    rate: 3
  };
  expect(calculateMonthlyPayment(values)).toEqual('1264.81')
});


it("should return a result with 2 decimal places", function () {
  let values = {
    amount: 20000,
    years: 10,
    rate: 3
  }
  expect(calculateMonthlyPayment(values)).toEqual('193.12')
  // ..
});
it('should handle high principle loan amount', function () {
  let values = {
    amount: 20000000,
    years: 30,
    rate: 2.8
  } 
  expect(calculateMonthlyPayment(values)).toEqual('82178.89')
})
it('should handle low principle loan amount', function () {
  let values = {
    amount: 10,
    years: 30,
    rate: 2.8
  } 
  expect(calculateMonthlyPayment(values)).toEqual('0.04')
})


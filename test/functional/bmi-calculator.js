var test = require('tape');
var bmiCalculator = require('../..');

test('FT it should return the correct bmi given metric measures', function(t) {
  t.plan(1);

  var expected = 24.9;
  var actual = bmiCalculator.metric(170, 72);

  t.equal(expected, actual);
});

test('FT it should return the correct bmi given imperial measures',
    function(t) {
  t.plan(1);

  var expected = 29.3;
  var actual = bmiCalculator.imperial(5, 0, 150);

  t.equal(expected, actual);
});

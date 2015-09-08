var calculator = require('../lib/calculator');
var test = require('tape');

test('calculator.metric without a precision specified should return the ' +
    'correct BMI', function(t) {
  t.plan(1);

  var expected = 24.9;
  var actual = calculator.metric(170, 72);

  t.equal(expected, actual);
});

test('calculator.metric with a precision specified should return the correct ' +
    'BMI', function(t) {
  t.plan(1);

  var expected = 24.91;
  var actual = calculator.metric(170, 72, 2);

  t.equal(expected, actual);
});

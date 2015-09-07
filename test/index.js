var index = require('..');
var test = require('tape');

test('index.imperial should be a function', function(t) {
  t.plan(1);

  var expected = 'function';
  var actual = typeof index.imperial;

  t.equal(expected, actual);
});

test('index.metric should be a function', function(t) {
  t.plan(1);

  var expected = 'function';
  var actual = typeof index.metric;

  t.equal(expected, actual);
});

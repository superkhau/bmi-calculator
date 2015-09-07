# bmi-calculator

A BMI (body mass index) calculator.

## Installation

```
npm install --save @superkhau/bmi-calculator
```

## API

- *bmiCalculator.metric(centimetres, kilograms[, precision])*
- *bmiCalculator.imperial(feet, inches, pounds[, precision])*

## Usage

Metric:

```
var bmiCalculator = require('@superkhau/bmi-calculator');
var result = bmiCalculator.metric(170, 72);
console.log(result); // 24.9
```

Imperial:

```
var bmiCalculator = require('@superkhau/bmi-calculator');
var result = bmiCalculator.imperial(5, 0, 150);
console.log(result); // 29.3
```

> Notice the [precision](#precision) defaults to 1 decimal place.

## Precision

You may specify a precision in the last argument of either function.

Metric:

```
var result = bmiCalculator.metric(72, 170, 2);
console.log(result); // 24.91
```

Imperial:

```
var result = bmiCalculator.metric(5, 0, 150, 2);
console.log(result); // 29.28
```

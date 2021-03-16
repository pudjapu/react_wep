//npm i interpolating-polynomial

var interpolatingPolynomial = require('interpolating-polynomial'),
    f = interpolatingPolynomial([[0, 9.81],
                                 [20000, 9.7487],
                                 [40000, 9.6879],
                                 [60000, 9.6879],
                                 [80000, 9.5682]]);

console.log(f(42000))
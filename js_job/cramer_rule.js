//npm install mathjs <---------------------------

var math = require('mathjs');

A = [
    [-2, 3, 1],
    [3, 4, -5],
    [1, -2, 1]
  ]
A_1 = [
    [9, 3, 1],
    [0, 4, -5],
    [-4, -2, 1]
  ]
A_2 = [
    [-2, 9, 1],
    [3, 0, -5],
    [1, -4, 1]
  ]
A_3 = [
    [-2, 3, 9],
    [3, 4, 0],
    [1, -2, -4]
  ]
a = math.det(A).toFixed(5);
a_1 = math.det(A_1).toFixed(5);
a_2 = math.det(A_2).toFixed(5);
a_3 = math.det(A_3).toFixed(5);

console.log("x1 : " + a_1/a);
console.log("x2 : " + a_2/a);
console.log("x3 : " + a_3/a);
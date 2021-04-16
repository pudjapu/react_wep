var jsregression = require('js-regression');
 
// === training data generated from y = 2.0 + 5.0 * x + 2.0 * x^2 === //
var data = [[1,0,1,4],
            [0,1,3,-5],
            [2,4,1,-6],
            [3,2,2,0],
            [4,1,5,-1],
            [2,3,3,-7],
            [1,6,4,-20]]

 
// === Create the linear regression === //
var regression = new jsregression.LinearRegression();
// can also use default configuration: var regression = new jsregression.LinearRegression(); 
 
// === Train the linear regression === //
var model = regression.fit(data);
 
// === Print the trained model === //
console.log(model);
 
 
// === Testing the trained linear regression === //
var testingData = [];
for(var x = 1.0; x < 100.0; x += 1.0) {
  var actual_y = 2.0 + 5.0 * x + 2.0 * x * x + Math.random() * 1.0;
  var predicted_y = regression.transform([x, x * x]);
  console.log("actual: " + actual_y); 
}
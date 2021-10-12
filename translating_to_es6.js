var increment = function(n) {return n + 1};
var square = function(n){ return n * n};
var doMathSoIdontHaveTo = function(n,func) {return func(n)}

doMathSoIdontHaveTo(5, square)
doMathSoIdontHaveTo(4, increment)

// translating this into es6 

var increment = (n) => n + 1
var square = (n) => n * n
doMathSoIdontHaveTo = (n, func) => func(n)


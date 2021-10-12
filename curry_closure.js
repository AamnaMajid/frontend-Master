var _ = require('lodash')

var abc = function(a, b, c) {
    return [a, b, c];
  };
   
var curried = _.curry(abc);
   
const ans = curried(1)(2)(3);
console.log(ans)
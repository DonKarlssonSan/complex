// Complex numbers 
// verbose code on purpose
// just playing around with node.js
exports.Complex = function (real, im) {
  this.r = real;
  this.i = im;
  
  // Complex multiplication
  // (a, b)(c, d) = (ac - bd), (ad + bc) 
  this.mult = function(complex) {
    var a = this.r;
    var b = this.i;
    var c = complex.r;
    var d = complex.i;    
    var real = a * c - b * d;
    var im = a * d + b * c;
    return {r: real, i: im};
  };

  // Complex division
  // (a, b)/(c, d) = ((ac+bd)/(c^2+d^2), (bc-ad)/(c^2+d^2))
  this.div = function(complex) {
    var a = this.r;
    var b = this.i;
    var c = complex.r;
    var d = complex.i;
    var real = (a*c+b*d)/(c*c+d*d);
    var im = (b*c-a*d)/(c*c+d*d)
    return {r: real, i: im};
  };
};

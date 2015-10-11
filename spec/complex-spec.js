var complex = require("../src/complex");

describe("Complex number", function () {
  it("should multiply", function () {
    var c1 = new complex.Complex(2, 3);
    var c2 = new complex.Complex(4, 5);

    var product = c1.mult(c2);
    expect(product.r).toBe(-7);
    expect(product.i).toBe(22);
  });

  it("should multiply with number datatypes as parameters", function () {
    var c1 = new complex.Complex(2, 3);

    var product = c1.mult(4, 5);
    expect(product.r).toBe(-7);
    expect(product.i).toBe(22);
  });

  it("should multiply with a single number datatype", function () {
    var c1 = new complex.Complex(2, 3);

    var product = c1.mult(4);
    expect(product.r).toBe(8);
    expect(product.i).toBe(12);
  });
  
  
  
  it("should divide", function () {
    var c1 = new complex.Complex(4, 2);
    var c2 = new complex.Complex(3, -1);

    var result = c1.div(c2);
    expect(result.r).toBe(1);
    expect(result.i).toBe(1);
  });

  // multiply with self should be the same as power of 2
  it("should be raised to power of 2", function () {
    var c1 = new complex.Complex(2, 5);
    var c2 = new complex.Complex(2, 5);

    var product = c1.mult(c2);
    
    var testResult = c1.pow(2);
    expect(testResult.r).toBeCloseTo(product.r, 12);
    expect(testResult.i).toBeCloseTo(product.i, 12);
  });

  // http://web.pdx.edu/~caughman/Cindy%20501%20Final.pdf
  it("should be raised to power of 6", function () {
    var c1 = new complex.Complex(2, 2);
    
    var testResult = c1.pow(6);
    expect(testResult.r).toBeCloseTo(0, 12);
    expect(testResult.i).toBeCloseTo(-512, 12);
  });
  
  it("should be possible to chain method calls", function () {
    var c1 = new complex.Complex(3, 8);
    var c2 = new complex.Complex(2, 3);
    
    var result = c1.mult(c2).div(c2).mult(c2).div(c2);
    expect(result.r).toBe(c1.r);
    expect(result.i).toBe(c1.i);
  });
  
  it("should add", function () {
    var c1 = new complex.Complex(3, 8);
    var c2 = new complex.Complex(2, 3);
    
    var result = c1.add(c2);
    expect(result.r).toBe(5);
    expect(result.i).toBe(11);
  });
  
  it("should add a simple number", function () {
    var c1 = new complex.Complex(3, 8);
    
    var result = c1.add(2, 3);
    expect(result.r).toBe(5);
    expect(result.i).toBe(11);
  });
  
  it("should subtract", function () {
    var c1 = new complex.Complex(3, 8);
    var c2 = new complex.Complex(2, 3);
    
    var result = c1.sub(c2);
    expect(result.r).toBe(1);
    expect(result.i).toBe(5);
  });
});

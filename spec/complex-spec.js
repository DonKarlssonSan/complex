var complex = require("../src/complex");

describe("Complex number", function () {
  it("should multiply", function () {
    var c1 = new complex.Complex(2, 3);
    var c2 = new complex.Complex(4, 5);

    var product = c1.mult(c2);
    expect(product.r).toBe(-7);
    expect(product.i).toBe(22);
  });
  
  it("should divide", function () {
    var c1 = new complex.Complex(4, 2);
    var c2 = new complex.Complex(3, -1);

    var result = c1.div(c2);
    expect(result.r).toBe(1);
    expect(result.i).toBe(1);
  });
});    
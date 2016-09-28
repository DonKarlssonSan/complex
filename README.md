[![Build Status](https://travis-ci.org/DonKarlssonSan/complex.svg?branch=master)](https://travis-ci.org/DonKarlssonSan/complex)

# complex
A JavaScript library for making calculations with complex numbers.

## Installing
Run this on the command line:

    npm install complex-numbers

## Using
### General
Require

    var Complex = require("complex");

Create complex objects

    var c1 = new Complex(1, 2);
    var c2 = new Complex(3, 4);

Perform operations on them

    var result = c1.mult(c2); // { r: -5, i: 10 } 

You can chain calls

    var c1 = new Complex(3, 8);
    var c2 = new Complex(2, 3);
    var result = c1.mult(c2).div(c2).mult(c2).div(c2); // { r: 3, i: 8 }

### Operations
#### Add

    var c1 = new Complex(3, 8);
    var c2 = new Complex(2, 3);
    var result = c1.add(c2); // { r: 5, i: 11 }

It is also possible to specify the complex number as two parameters

    var c1 = new Complex(3, 8);
    var result = c1.add(2, 3); // { r: 5, i: 11 }

#### Subtract

    var c1 = new Complex(3, 8);
    var c2 = new Complex(2, 3);
    var result = c1.sub(c2); // { r: 1, i: 5 } 

#### Multiply

    var c1 = new Complex(2, 3);
    var c2 = new Complex(4, 5);
    var result = c1.mult(c2);  // { r: -7, i: 22 }

It is also possible to specify the complex number as two parameters

    var c1 = new Complex(2, 3);
    var result = c1.mult(4, 5); // { r: -7, i: 22 }

If you only need to add a real number then just use one parameter

    var c1 = new Complex(2, 3);
    var result = c1.mult(4); // { r: 8, i: 12 }

#### Divide

    var c1 = new Complex(4, 2);
    var c2 = new Complex(3, -1);
    var result = c1.div(c2); // { r: 1, i: 1 }

#### Conjugate

    var c1 = new Complex(7, 3);
    var result = c1.con(); // { r: 7, i: -3 }

#### Absolute value

    var c1 = new Complex(3, 4);
    var result = c1.abs(); // 5

#### Additive inverse

    var c1 = new Complex(4, 5);
    var result = c1.neg(); // { r: -4, i: -5 }

#### Convert to polar

    var c1 = new Complex(0, 1);
    var result = c1.toPolar(); // { r: 1, i: Math.PI/2 }

## Developing

    git clone https://github.com/DonKarlssonSan/complex.git
    cd complex
    npm install

## Testing
Run:

    npm test

This works because jasmine-node is set up as a local devDependency in `package.json`:

    "devDependencies": {
      "jasmine-node": "^1.14.5"
    }
And is pointed to by the test "target":
 
    "scripts": {
      "test": "jasmine-node spec"
    }

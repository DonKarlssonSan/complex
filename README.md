[![Build Status](https://travis-ci.org/DonKarlssonSan/complex.svg?branch=master)](https://travis-ci.org/DonKarlssonSan/complex)

# complex
A JavaScript library for making calculations with complex numbers.

## Installing
Run this on the command line:

    npm install complex-numbers

## Using
In a JavaScript file:

    var complex = require("complex");
    var c1 = new complex.Complex(1, 2);
    var c2 = new complex.Complex(3, 4);
    console.log(c1.mult(c2)); // { r: -5, i: 10 } 

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

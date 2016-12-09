// The Number.isInteger() method determines whether the passed value is an integer.
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger("10");      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false

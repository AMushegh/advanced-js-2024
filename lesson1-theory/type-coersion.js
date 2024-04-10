// - to string
let a = null;
const b = String(a);

String(123); // '123'
String(-12.3); // '-12.3'
String(null); // 'null'
String(undefined); // 'undefined'
String(true); // 'true'
String(false); // 'false'
17 + "dw"; // '17dw' implicit

// - to boolean
Boolean(0); // false
Boolean(-0); // false
Boolean(false); // false
Boolean(""); // false
Boolean(null); // false
Boolean(NaN); // false
Boolean(undefined); // false

// - to number
Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
Number("      12 "); // 12
Number("-12.34"); // -12.34
Number("\n"); // 0
Number(" 12n "); // NaN
Number(123); // 123

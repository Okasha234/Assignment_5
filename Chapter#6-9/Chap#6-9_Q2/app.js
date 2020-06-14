var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("--a;  // a = 1 and b = 1"+"<br>"+"<br>");
document.write("--a  -  --b;  // a = 1; and b = 0; Result(--a  -  --b = 1;)"+"<br>"+"<br>");
document.write("--a - --b + ++b; // --a  -  --b = 1; and b = 1; Result(--a - --b + ++b = 2;)"+"<br>"+"<br>");
document.write("--a - --b + ++b + b--; // --a - --b + ++b = 2; a = 1 and b = 0 ////Result = 3"+"<br>"+"<br>");

document.write("a is: "+a+"<br>");
document.write("b is: "+b+"<br>");
document.write("Result is: "+result+"<br>");
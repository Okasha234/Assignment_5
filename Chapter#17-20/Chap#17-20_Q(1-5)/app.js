var arr = [[], []];

var multi_Arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

document.write("<br><br><br><br>");
var table_No = +prompt("Enter the table no:");
var table_len = +prompt("Enter the length of the table no:");

for (var i = 1; i <= table_len; i++) {
    document.write(table_No + " x " + i + " = " + (table_No * i) + "<br>");
}

document.write("<br><br><br><br>");

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

document.write("<br><br>");

for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index "+i+" is "+fruits[i] + "<br>");
}
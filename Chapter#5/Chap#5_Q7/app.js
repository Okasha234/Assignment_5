var item_1 = 650;
var item_2 = 950;
var shipping = 100;

var $no_of_item1 = +prompt("Ordered quantity of item 1","e.g: 3");
var $no_of_item2 = +prompt("Ordered quantity of item 2","e.g: 3");

document.write("Price of item 1 is "+item_1+"<br>");
document.write("Quantity of item 1 is "+$no_of_item1+"<br>");
document.write("Price of item 2 is "+item_2+"<br>");
document.write("Quantity of item 2 is "+$no_of_item2+"<br>");
document.write("Shipping charges "+shipping+"<br>");
document.write("<br>")
var total = (item_1*$no_of_item1)+(item_2*$no_of_item2)+100;
document.write("Total cost of your order is "+total+"<br>");
var x = +prompt("Enter the temperature in Celcius\nfor convertion to Fahrenheit");
var y = +prompt("Enter the temperature in Fahrenheit\nfor convertion to Celcius");
var fahrenheit = (x*(9/5))+32;
var celcius = (y-32)*(5/9);

document.write(x+"\u00B0C"+" "+"is"+ " "+fahrenheit+"\u00B0F"+"<br>")
document.write(y+"\u00B0F"+" "+"is"+ " "+celcius+"\u00B0C")
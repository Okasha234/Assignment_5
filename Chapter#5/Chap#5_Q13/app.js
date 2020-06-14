var fav_Snaks = prompt("Enter your favourite snaks","e.g: Choclates");
var amount = +prompt("How many times in a day you intake your favourite snaks");
var age = +prompt("Enter your current age");
var max_Age = +prompt("Enter your maximum expected age");
var last = (((max_Age-age)*365)*amount);
document.write("Favourite snaks: "+fav_Snaks+"<br>"+"Current age: "+age+"<br>"+"Estimated maximum age: "+max_Age+"<br>"+"Amount of snaks per day: "+amount+"<br>");
document.write("You will need "+last+" to last you until the ripe old age of "+max_Age);
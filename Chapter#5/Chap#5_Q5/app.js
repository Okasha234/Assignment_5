var table_Num = +prompt("Enter your table number","e.g: 5");

document.write("Table of"+" "+table_Num+"<br>");
for(var i=1; i<=10; i++){
    document.write(table_Num+" "+"x"+" "+i+" "+"="+" "+(table_Num*i)+"<br>");
}
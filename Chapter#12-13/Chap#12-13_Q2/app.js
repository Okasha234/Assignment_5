var int_1 = +prompt("Enter integer number_1");
var int_2 = +prompt("Enter integer number_2");

if (int_1 > int_2){
    document.write(int_1+" "+"Greater than"+" "+int_2);
}else if (int_2 > int_1){
    document.write(int_2+" "+"Greater than"+" "+int_1);
}else if (int_1 === int_2){
    document.write(int_1+" and "+int_1+" are Equal");
}

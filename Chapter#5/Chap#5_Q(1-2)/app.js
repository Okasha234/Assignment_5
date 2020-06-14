var choice = +prompt("Which task you wanna perform\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Divison\n5. Modulus","e.g: 3");
var num_1 = +prompt("Enter your first number");
var num_2 = +prompt("Enter your second number");

if(choice===1){
    document.write("Sum of"+" "+num_1+" "+"and"+" "+num_2+" "+"is"+" "+(num_1+num_2));
}else if(choice===2){
    document.write("Subraction of"+" "+num_1+" "+"and"+" "+num_2+" "+"is"+" "+(num_1-num_2));
}else if(choice===3){
    document.write("Multiplication of"+" "+num_1+" "+"and"+" "+num_2+" "+"is"+" "+(num_1*num_2));
}else if(choice===4){
    document.write("Divison of"+" "+num_1+" "+"and"+" "+num_2+" "+"is"+" "+(num_1/num_2));
}else if(choice===5){
    document.write("Modulus of"+" "+num_1+" "+"and"+" "+num_2+" "+"is"+" "+(num_1%num_2));
}else{
    document.write("Wrong Choice!");
}
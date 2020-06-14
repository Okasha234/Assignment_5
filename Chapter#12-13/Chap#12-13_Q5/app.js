var check_Psd = 'levi@777';
var password = prompt("Enter your password");
document.write("Password: "+password+"<br>");

if (password === ''){
    document.write("Please enter your password");
}else if (password === check_Psd){
    document.write("Correct! The password you entered matches the original password");
}else if (password != check_Psd){
    document.write("Incorrect password");
}
var input_Value = prompt("Enter any number or character you want");

if (input_Value >= 'A' && input_Value <= 'Z')
    document.write(input_Value + " is an UpperCase character\n");
else if (input_Value >= 'a' && input_Value <= 'z')
    document.write(input_Value + " is an LowerCase character\n");
else
    document.write(input_Value + " is a number\n"); f
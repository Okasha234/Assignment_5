var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var search = prompt("Welcome to ABC Bakery. What do you wanna order sir/ma'am");

for (var i = 0; i < A.length; i++) {
    if (search === A[i]) {
        var find = true;
        break;
    }
    else {
        find = false;
    }
}

if (find === true) {
    prompt(search + " is available at index" + i + " in our Bakery");
}
else {
    prompt("We are Sorry" + search + " is not available in our Bakery");
}

arr = [24, 53, 78, 91, 12];
document.write("Array Items:<br>"+arr+"<br><br>");
arr_sorted = arr.sort();
document.write("Largest No.:<br>"+arr_sorted.pop()+"<br><br>");
document.write("Smallest No.:<br>"+arr_sorted.shift());
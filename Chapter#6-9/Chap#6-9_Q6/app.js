var sub_1 = prompt("Enter subject_1 name","e.g: Maths");
var sub_2 = prompt("Enter subject_2 name");
var sub_3 = prompt("Enter subject_3 name");

var marks_1 = +prompt("Enter obtained marks of "+sub_1);
var marks_2 = +prompt("Enter obtained marks of "+sub_2);
var marks_3 = +prompt("Enter obtained marks of "+sub_3); 

var total_Marks = 100;
var per_1 = (marks_1/total_Marks)*100;
var per_2 = (marks_2/total_Marks)*100;
var per_3 = (marks_3/total_Marks)*100;

document.write(sub_1+" "+total_Marks+"  "+marks_1+" "+per_1+"%"+"<br>");
document.write(sub_2+" "+total_Marks+"  "+marks_2+" "+per_2+"%"+"<br>");
document.write(sub_3+" "+total_Marks+"  "+marks_3+" "+per_3+"%"+"<br><br>");

document.write("         "+"    300     "+"          "+(marks_1+marks_2+marks_3)+"           "+(per_1+per_2+per_3)+"%"+"<br>");


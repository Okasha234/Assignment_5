var time = +prompt("Enter time in 24 hours clock format like: 1900");

for (var i = 0000; i <= 2400; i = i + 100) {
    if (i === time && (i >= 0000 && i < 1200)) {
        document.write((i / 100) + "am");
    } else if (i === time && i === 1200) {
        document.write((i/100) + "pm");
    } else if (i === time && (i > 1200 && i < 2400)) {
        document.write(((i / 100) - 12) + "pm");
    }
}

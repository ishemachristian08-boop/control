//start pattern using nested for loop
for(let i = 5; i >= 1; i--) {
    let row = "";
    for(let j = 5; j >= i; j--) {
        row += "*"; // append a star to the row
    }
    console.log(row); // print the row after the inner completes
}

//using number pattern
console.log("number pattern:");
for(let i = 5; i >= 1; i--) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += j + " "; // append the current number to the row string
    }
    console.log(row);
}
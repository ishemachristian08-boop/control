//nested for loop example pattern with two triangles upside down and righside up
for(let i=1; i<=5; i++){
    let row="";
    for(let j=1; j<=i; j++){
        row += "* "; //append a star to the row string
    }
    console.log(row);
}
for(let i=4; i>=1; i--){
    let row="";
    for(let j=1; j<=i; j++){
        row += "* ";//append the current star to the row string
    }
    console.log(row);
}

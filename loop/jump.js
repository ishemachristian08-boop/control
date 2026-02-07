//jump statement example
for(let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue; //skip the rest of the loop when i is 5
  }
  console.log(i);
}
console.log("Now demonstrating break statement");
//break statement example
for(let i = 0; i <= 10; i++) {
    if(i === 7) {
        break; //exit the loop when i is 7
    }
}

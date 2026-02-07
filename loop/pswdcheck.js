//password check with three attempts using while loop
let attempts = 3;
let input=0;
const correctpassword = "secure123";

while (attempts > 0) {
  input = prompt(`Enter your password($${attempts} attempts remaining):`);
  if (input=== correctpassword) {
    console.log("Access granted.");
    break;
  } 
  if (input === null) {
    alert("Input entry cancelled.");
    console.log("User cancelled the prompt.");
  } else {
    attempts--;
    if (attempts > 0){
         alert("Wrong password. Try again ");
    }else {
        alert("Access Denied. your account is locked");
    }
   
  }
}
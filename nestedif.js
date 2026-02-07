//nested if statements
let age = 15;
let nationality="Kenyan";
if(age>18){
    console.log(" You are Adult.");
    if(nationality==="Rwandan"){
        console.log(" You are eligiible to vote in Rwandan.");
    }else{
        console.log(" You are not a Rwandan citizen. So you cannot vote in Rwaanda.");
    }
}

else{
    console.log(" You are a minor. And you cannot vote.");
}
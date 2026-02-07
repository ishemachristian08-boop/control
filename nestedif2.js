//nested if statements
let passenger=true;
let trafficLight="red";
if(passenger){
    console.log("There is a passenger on the crosswalk");
    if(trafficLight==="green"){
        console.log("You can cross the road.");
    }else{
        console.log("Wait for the green light.");
    }
}else{
    console.log("No passenger on the crosswalk.");
}
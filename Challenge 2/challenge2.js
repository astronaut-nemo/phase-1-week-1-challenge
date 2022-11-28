// Question: Challenge 2: Speed Detector (Toy Problem)
// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

// Takes the speed of the car as input
let speed = window.prompt("Input the speed of the car");

//If speed<70, output "Ok"
if(speed <= 70){
    console.log("OK.");
} 
else if(speed > 70){
    // If speed > 70, give a demerit for each 5km/s above 70
    countDemerits();
}

function countDemerits(){
    // Calculate the number of km/s above 70km/s, then divide by 5 to get the number of demerits per 5km/s
    let demeritsCount = Math.floor((speed-70)/5);
    if(demeritsCount > 12){
        // If the number of demerits is greater than 12, print "License suspended."
        console.log("License suspended.");
        return;
    }
    // Otherwise, print the number of demerit points
    console.log(`Demerit Points: ${demeritsCount}`);
}
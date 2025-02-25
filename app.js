// var rightNow = new Date();
// console.log(rightNow);


var rightNow = new Date(); 
var hours = rightNow.getHours();
var period;


if (hours >= 12) {
  period = "PM";
  if (hours > 12) {
    hours -= 12;  
  }
} else {
  period = "AM";
  if (hours === 0) {
    hours = 12;  
  }
}

console.log("Current time is: " +  " " + period);
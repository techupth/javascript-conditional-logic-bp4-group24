// Exercise #3: Shorten Light Bulb
let lightBulbStatus = "A";
// Start coding here.
let message;
lightBulbStatus === "On"? 
message="Light bulb is On"
:lightBulbStatus === "Off"?
message="Light bulb is Off."
:lightBulbStatus === "Broken"?
message="Light bulb is Broken."
:message="Please choose the correct input (On/Off)";

console.log(message);


// Exercise #4: Switch the Light Bulb
let lightBulbStatus = "On";
// Start coding here.
let message;
switch (lightBulbStatus) {
    case "On":message ="Light bulb is On.";break;
    case "Off": message = "Light bulb is Off."; break;
    case "Broken":message = "Light bulb is Broken."; break;
    default: message = "Please choose the correct input (On/Off)";
};
console.log(message);

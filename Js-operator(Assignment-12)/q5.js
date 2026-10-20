let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

checkSecurity();

// Test another outcome
isAlarmOn = false;
checkSecurity();
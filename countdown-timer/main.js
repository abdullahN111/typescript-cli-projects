import { differenceInSeconds } from "date-fns";
function* countdownTimer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
let timerI = countdownTimer(10);
function displayCountdown() {
    let result = timerI.next();
    if (!result.done) {
        const now = new Date();
        const countdownTime = new Date(now.getTime() + (result.value * 1000));
        const remainingSeconds = differenceInSeconds(countdownTime, now);
        console.log(`Remaining Seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000);
    }
    else {
        console.log();
        console.log("Countdown Compelete!");
    }
}
displayCountdown();

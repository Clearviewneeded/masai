
function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete("Timer of " + duration + " ms finished");
  }, duration);
}
function onTimerComplete(message) {
  console.log(message);
}
timer(4000, onTimerComplete);

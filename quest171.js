console.log("Task 1");
console.log("Task 2");
console.log("Task 3");


//2
console.log("Message 1");

setTimeout(() => {
  console.log("Message 2 after 2 seconds");
}, 2000);

console.log("Message 3");

//
console.log("Loading...");

let intervalId = setInterval(() => {
  console.log("Loading...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Loaded successfully!");
}, 5000);


//
console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");

//

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the countdown time in seconds: ", (input) => {
  let time = parseInt(input);

  console.log(`Countdown started from ${time} seconds`);
  
  const timer = setInterval(() => {
    console.log(`Time remaining: ${time} seconds`);
    time--;

    if (time < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      process.exit();
    }
  }, 1000);

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on("data", (key) => {
    if (key.toString() === "s") {
      setTimeout(() => {
        clearInterval(timer);
        console.log("Countdown stopped by user!");
        process.exit();
      }, 0);
    }
  });
});

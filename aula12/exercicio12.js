var now = new Date();
var hour = now.getHours();
console.log(`The current time is ${hour}.`);

if (hour < 5 && hour > 0) {
  console.log("Good dusk!");
} else if (hour <= 12) {
  console.log("Good morning");
} else if (hour <= 18) {
  console.log("Good afternoon");
} else {
  console.log("Good night");
}

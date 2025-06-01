var age = 66;
console.log(`You are ${age} years old.`);
if (age < 16) {
  console.log("Can't vote yet");
} else if (age < 18 || age > 65) {
  console.log("optional voting");
} else {
  console.log("compulsory voting");
}

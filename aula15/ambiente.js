let num = [8, 3, 5];
num.push(8);
console.log(`No momento está assim ${num};`);
num.sort();
console.log(`Agora ficou assim: ${num};`);

// Usando o for
// for (var i = 0; i < num.length; i++) {
//   console.log(`O valor na posição ${i} é ${num[i]}`);
// }

// Usando o forin
for (let i in num) {
  console.log(`O valor em ${i} é ${num[i]}`);
}

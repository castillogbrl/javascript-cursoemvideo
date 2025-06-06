function fatorial(num) {
  let fator = 1;
  for (let i = num; i > 1; i--) {
    fator *= i;
  }
  return `Fator: ${fator}`;
}

console.log(fatorial(5));
// 5! = 5 x 4 x 3 x 2 x 1

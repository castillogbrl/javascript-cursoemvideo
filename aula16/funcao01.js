function parOuImpar(num) {
  if (num % 2 == 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

console.log(`O número em questão é ${parOuImpar(15)}`);

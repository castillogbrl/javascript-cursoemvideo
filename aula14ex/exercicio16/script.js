function count() {
  let beginAtString = document.getElementById("inicio");
  let endAtString = document.getElementById("fim");
  let countString = document.getElementById("passo");
  let result = document.getElementById("resultado");

  if (
    beginAtString.value.length == 0 ||
    endAtString.value.length == 0 ||
    countString.value.length == 0
  ) {
    result.innerHTML = "Impossível contar";
  } else {
    result.innerHTML = `Contando: <br>`;

    let beginAt = Number(beginAtString.value);
    let endAt = Number(endAtString.value);
    let count = Number(countString.value);

    if (count <= 0) {
      window.alert("Passo inválido. Considerando 1");
      count = 1;
    }
    if (beginAt < endAt) {
      // Contagem Progressiva
      for (let i = beginAt; i <= endAt; i += count) {
        result.innerHTML += `🎯${i}`;
      }
    } else {
      // Contagem Regressiva
      for (let i = beginAt; i >= endAt; i -= count) {
        result.innerHTML += `🎯${i}`;
      }
    }
    result.innerHTML += "🧙";
  }
}

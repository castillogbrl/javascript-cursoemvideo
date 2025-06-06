// Verifica se o número está entre 1 e 100;
// não permite inserir um número que já está no array;
// se o campo está vazio.
let res = document.getElementById("resultado");
let numberArray = [];

function addNumber() {
  let numberString = document.getElementById("numero");
  let select = document.getElementById("select");
  let number = Number(numberString.value);

  res.innerHTML = `<input type="submit" value="Finalizar" onclick="calc();" />`;

  if (number < 1 || number > 100) {
    window.alert("Valor inválido ou já encontrado na lista");
  } else if (numberArray.indexOf(number) != -1) {
    window.alert("Valor inválido ou já encontrado na lista");
  } else {
    numberArray.push(number);
    const i = numberArray.indexOf(number);
    const option = document.createElement("option");
    option.textContent = `Valor ${numberArray[i]} adicionado.`;
    select.appendChild(option);
  }
  numberString.value = "";
  numberString.focus();
}

// Só é possível finalizar se houver números no array;
// informa números cadastrados;
// maior valor cadastrado
// menor valor cadastrado
// somas dos valores
// média dos valores
function calc() {
  if (numberArray.length == 0) {
    window.alert("Lista vazia");
  } else {
    let length = document.createElement("p");
    let high = document.createElement("p");
    const highest = Math.max(...numberArray);
    let low = document.createElement("p");
    const lowest = Math.min(...numberArray);
    let sum = document.createElement("p");
    let average = document.createElement("p");
    let arraySum = numberArray.reduce((acc, cur) => acc + cur);
    let arrayAvg = arraySum / numberArray.length;

    length.textContent = `Ao todo, temos ${numberArray.length} números cadastrados.`;
    res.appendChild(length);
    high.textContent = `O maior valor informado foi ${highest}.`;
    res.appendChild(high);
    low.textContent = `O menor valor informado foi ${lowest}.`;
    res.appendChild(low);
    sum.textContent = `Somando todos os valores temos ${arraySum}.`;
    res.appendChild(sum);
    average.textContent = `A média dos valores digitados é: ${arrayAvg}.`;
    res.appendChild(average);
  }
}

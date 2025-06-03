function calculate() {
  let number = document.getElementById("numero");
  let numberParsed = Number(number.value);
  let select = document.getElementById("tabuada");

  if (number.value == "") {
    window.alert("Não deixe o campo número vazio.");
  }
  select.innerHTML = "";
  for (let i = 0; i <= 10; i++) {
    let sum = numberParsed * [i];
    let option = document.createElement("option");
    option.innerHTML = `${numberParsed} * ${[i]} = ${sum}`;
    select.appendChild(option);
  }
}

function load() {
  var message = document.querySelector("div#mensagem");
  var image = document.querySelector("img#imagem");
  var date = new Date();
  var hour = date.getHours();

  if (hour < 6) {
    message.innerHTML = `Agora são ${hour} hrs da madrugada`;
    image.src = "assets/noite.jpg";
    document.body.style.background = "#254D70";
  } else if (hour < 12) {
    message.innerHTML = `Agora são ${hour} hrs da manhã.`;
    document.body.style.background = "#84AE92";
    image.src = "assets/manha.jpg";
  } else if (hour === 12) {
    message.innerHTML = `Agora são ${hour} hrs. exatamente meio-dia.`;
    image.src = "assets/manha.jpg";
    document.body.style.background = "#84AE92";
  } else if (hour <= 18) {
    message.innerHTML = `Agora são ${hour} hrs da tarde.`;
    image.src = "assets/tarde.jpg";
    document.body.style.background = "#FFD66B";
  } else {
    message.innerHTML = `Agora são ${hour} hrs da noite.`;
    image.src = "assets/noite.jpg";
    document.body.style.background = "#254D70";
  }
}

function verify() {
  var userBirthString = document.querySelector("input#dataDeNascimento");
  var res = document.querySelector("div#result");
  var sex = document.getElementsByName("sexRadio");

  var date = new Date();
  var currentYear = date.getFullYear();
  var parsedUserBirth = Number(userBirthString.value);
  var age = currentYear - parsedUserBirth;

  if (userBirthString.value.length == 0 || parsedUserBirth > currentYear) {
    window.alert("Verifique as informações e tente novamente");
  }
  var gender;
  var image = document.createElement("img");
  image.setAttribute("id", "photo");
  if (sex[0].checked) {
    gender = "Homem";
    if (age >= 0 && age < 16) {
      // Criança
      image.setAttribute("src", "assets/boy.jpg");
    } else if (age < 21) {
      // Jovem
      image.setAttribute("src", "assets/young-man.jpg");
    } else if (age < 50) {
      // Adulto
      image.setAttribute("src", "assets/man.jpg");
    } else {
      // Idoso
      image.setAttribute("src", "assets/old-man.jpg");
    }
  } else {
    gender = "Mulher";
    if (age >= 0 && age < 16) {
      // Criança
      image.setAttribute("src", "assets/girl.jpg");
    } else if (age < 21) {
      // Jovem
      image.setAttribute("src", "assets/young-woman.jpg");
    } else if (age < 50) {
      // Adulto
      image.setAttribute("src", "assets/woman.jpg");
    } else {
      // Idoso
      image.setAttribute("src", "assets/old-woman.jpg");
    }
  }
  image.style.width = "250px";
  image.style.height = "250px";
  res.innerHTML = `Detectamos ${gender} com a idade: ${age}`;
  res.appendChild(image);
}

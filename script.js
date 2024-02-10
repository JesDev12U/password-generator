const $body = document.body;
const $darkLightThemeBtn = document.getElementById("dark-light-theme");
const $generatePasswordBtn = document.getElementById("generate-password");
let oscuro = true;

$darkLightThemeBtn.addEventListener("click", (e) => {
  $body.classList.toggle("dark-theme");
  if (oscuro) {
    $darkLightThemeBtn.classList.remove("fa-regular", "fa-moon");
    $darkLightThemeBtn.classList.add("fa-regular", "fa-sun");
    oscuro = false;
  } else {
    $darkLightThemeBtn.classList.remove("fa-regular", "fa-sun");
    $darkLightThemeBtn.classList.add("fa-regular", "fa-moon");
    oscuro = true;
  }
});

const generarPassword = () => {
  //33 - 122 UTF-8
  let long = Math.floor(8 + Math.random() * (16 - 8));
  let pass = "";
  for (let i = 0; i < long; i++) {
    pass += String.fromCharCode(Math.floor(33 + Math.random() * (122 - 33)));
  }
  const $password = document.getElementById("password-generated");
  $password.textContent = pass;
};

window.onload = generarPassword;
$generatePasswordBtn.addEventListener("click", generarPassword);

const $body = document.body;
const $darkLightThemeBtn = document.getElementById("dark-light-theme");
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

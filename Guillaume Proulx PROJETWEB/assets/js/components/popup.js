// Selection HTML
const popup = document.querySelector(".overlay");
const popclose = document.querySelector(".close");

//Fonctions

function init() {
  hidePopup();
  setTimeout(() => {
    showPopup();
  },5000);
  popup.addEventListener("click", hidePopup);
}


function showPopup() {
  popup.classList.remove("invisible");

  let user = {
    name: "John Doe",
  };
  let stringUser = JSON.stringify(user);
  localStorage.setItem("user", stringUser);
  localStorage.setItem("popup-open", "true");
}



function hidePopup() {
  popup.classList.add("invisible");
}

//Exécution
init();

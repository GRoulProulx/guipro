// Imports
import Carousel from "../classes/Carousel.js";
import { init as initNavigation } from "../components/navigation.js";
import ScrollAnimator from "../classes/ScrollAnimator.js";

// Fonctions

function init() {
  initNavigation();
  //Popup future

  let img = document.querySelector(".img-carroussel");

  img.addEventListener("click", function () {
    img.classList.add("img-anime");
  });
  img.addEventListener("mouseleave", function () {
    img.classList.remove("img-anime");
  });

  let containerCarousel = document.querySelector("[data-carroussel]");

  let arrayImages = [
    "assets/img/affiches/pulpfiction.webp",
    "assets/img/affiches/backtothefuture.webp",
    "assets/img/affiches/jurassicpark.webp",
    "assets/img/affiches/seven.webp",
    "assets/img/affiches/thematrix.webp",
    "assets/img/affiches/darkknight.webp",
  ];

  new Carousel(containerCarousel, arrayImages);

  let zone = null;
  let cibles = document.querySelectorAll("h1");
  new ScrollAnimator(zone, cibles);
}

// Executions
init();

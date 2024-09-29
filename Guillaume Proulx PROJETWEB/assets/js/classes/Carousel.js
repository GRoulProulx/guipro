// Classes

class Carousel {
  constructor(containerHTML, arrayImages) {
    this.position = 0;
    let contextClass = this;
    this.arrayImages = arrayImages;

    this.containerHTML = containerHTML;
    this.imagesContainer = this.containerHTML.querySelector(".img-carroussel");
    this.listImages = this.containerHTML.querySelector(".list-img");

    let startingImage = this.arrayImages[this.position];
    this.showImages(startingImage);

    this.interval = window.setInterval(
      function () {
        this.foward();
      }.bind(contextClass),
      12000
    );

    this.containerHTML.addEventListener(
      "click",
      this.buttonCarousel.bind(contextClass)
    );

    this.showImages(this.arrayImages[this.position]);
  }

  //Fonctions des bouttons avancer & reculer dans le carroussel

  buttonCarousel(event) {
    let btn = event.target.closest("[data-direction]");

    if (btn !== null) {
      clearInterval(this.interval);
      let direction = Number(btn.dataset.direction);

      if (direction == 1) {
        this.foward();
      } else if (direction == -1) {
        this.backward();
      }
      this.interval = window.setInterval(
        function () {
          this.foward();
        }.bind(this),
        12000
      );
    }
  }

  showImages(sourceImage) {
    this.imagesContainer.src = sourceImage;
  }

  foward() {
    this.position++;
    if (this.position >= this.arrayImages.length) {
      this.position = 0;
    }

    let img = this.arrayImages[this.position];
    this.showImages(img);
  }

  backward() {
    this.position--;
    if (this.position < 0) {
      this.position = this.arrayImages.length - 1;
    }

    let img = this.arrayImages[this.position];
    this.showImages(img);
  }
}

//Export

export default Carousel;

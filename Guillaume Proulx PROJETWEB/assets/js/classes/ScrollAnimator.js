/**
 * Cette classe permet d'afficher des éléments au défilement de la page
 */
class ScrollAnimator {
  constructor(zone, targets) {
    this.zone = zone;
    this.targets = targets;

    this.options = {
      root: this.zone,
      rootMargin: "0px",
      threshold: 0.4,
    };
    this.observer = new IntersectionObserver(
      this.onIntersection.bind(this),
      this.options
    );
    targets.forEach(
      function (target) {
        this.observer.observe(target);
      }.bind(this)
    );
  }

  /**
   * Fonction de rappel appelée lorsqu'un élément cible entre ou sort de la zone d'intersection
   * @param {*} entries
   */
  onIntersection(entries) {
    entries.forEach(
      function (entry) {
        let element = entry.target;
        let intersecte = entry.isIntersecting;

        if (intersecte == true) {
          element.classList.remove("animation");
        } else {
          element.classList.add("animation");
        }
      }.bind(this)
    );
  }
}
export default ScrollAnimator;

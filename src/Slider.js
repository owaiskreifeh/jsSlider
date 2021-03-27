/**
 * Create Slider (Carousel)
 * @param {HTMLElement} container slider container element
 * @param {HTMLElement} slider slider elements
 * @param {Number} slidesCount number of the slides
 * @param {Number} slideWidth slide width including it's margins and paddings
 */
export default function (container, slider, slidesCount, slideWidth) {
  const containerWidth = container.getBoundingClientRect().width;
  this._sliderStopThreshold =
    slidesCount * slideWidth - containerWidth + slideWidth;

  this.slideToIndex = function (index) {
    if (index < 0) {
      index = 0;
      return;
    } else if (index >= slidesCount) {
      index = slidesCount - 1;
      return;
    }
    if (index * slideWidth <= this._sliderStopThreshold) {
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  };
}

import "./styles.css";

// Consts and Helpers
const $ = document.querySelector.bind(document);
const CARD_WIDTH = 424 + 25;
const CARDS_LENGTH = 30;
// Elements
const sliderEl = $(".slider");
const containerEl = $(".container");

// init current index
let selectedIndex = 0;

// Setup cards
for (let index = 0; index < CARDS_LENGTH; index++) {
  const _card = document.createElement("div");
  _card.className = "card";
  _card.id = "card" + index;
  _card.innerHTML = "card" + index;
  _card.style.backgroundImage = `url(https://picsum.photos/${424}/${240}?q=${index})`;
  _card.style.marginRight = "25px";
  _card.style.width = "424px";
  _card.style.height = "240px";
  sliderEl.appendChild(_card);
}

document.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return;
    }
    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        slider.slideToIndex(--selectedIndex);
        break;
      case "Right":
      case "ArrowRight":
        slider.slideToIndex(++selectedIndex);
        break;
      default:
        return;
    }
    event.preventDefault();
  },
  true
);

class Slider {
  constructor(options) {
    this._options = {
      container: null,
      slider: null,
      slidesCount: 0,
      slideWidth: 0,
      ...options
    };

    const containerWidth = this._options.container.getBoundingClientRect()
      .width;
    this._sliderStopThreshold =
      this._options.slidesCount * this._options.slideWidth -
      containerWidth +
      this._options.slideWidth;

    this.slideToIndex = function (index) {
      if (index < 0) {
        index = 0;
        return;
      } else if (index >= this._options.slidesCount) {
        index = this._options.slidesCount - 1;
        return;
      }
      if (index * this._options.slideWidth <= this._sliderStopThreshold) {
        this._options.slider.style.transform = `translateX(-${
          index * this._options.slideWidth
        }px)`;
      }
    };
  }
}

const slider = new Slider({
  container: containerEl,
  slider: sliderEl,
  slideWidth: CARD_WIDTH,
  slidesCount: CARDS_LENGTH
});

import "./styles.css";
import Slider from "./Slider.js";
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

const slider = new Slider(containerEl, sliderEl, CARD_WIDTH, CARDS_LENGTH);

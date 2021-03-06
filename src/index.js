import "./styles.css";
import Slider from "./Slider.js";

// Consts and Helpers
const $ = document.querySelector.bind(document);
const CARD_WIDTH = 424 + 25;
const CARDS_LENGTH = 30;

// Elements
const sliderEl = $(".slider");
const containerEl = $(".container");

// Setup the Slider
const slider = new Slider(containerEl, sliderEl, CARDS_LENGTH, CARD_WIDTH);

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
$("#card0").classList.add("selected");

// Listen to left and right keypress
document.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return;
    }
    $("#card" + selectedIndex).classList.remove("selected");
    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        selectedIndex = Math.max(0, selectedIndex - 1);
        break;
      case "Right":
      case "ArrowRight":
        selectedIndex = Math.min(CARDS_LENGTH - 1, selectedIndex + 1);
        break;
      default:
        return;
    }
    $("#card" + selectedIndex).classList.add("selected");
    slider.slideToIndex(selectedIndex);
    event.preventDefault();
  },
  true
);

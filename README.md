# jsSlider

Pure JS Slider (Carousel)

## Usage

```js
// Import the class
import Slider from "./Slider.js";

// Init the slider
const slider = new Slider(
  containerEl, // Slider parent container
  sliderEl, // Slider it self
  400, // Width of each slide
  25 // number of slides
);

// Select index to slide to
slider.slideToIndex(5);
```

That is it :)

check this repo for example

[fork in CodeSandbox](https://codesandbox.io/s/misty-sun-zp6tg?file=/src/index.js)

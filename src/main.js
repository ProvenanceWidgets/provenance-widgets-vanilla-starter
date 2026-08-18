import "provenance-widgets/web-components/styles.css";
import "provenance-widgets/web-components/index.js";
import "./styles.css";

const cities = [
  { name: "New York", code: "New York" },
  { name: "Rome", code: "Rome" },
  { name: "London", code: "London" },
  { name: "Istanbul", code: "Istanbul" },
  { name: "Paris", code: "Paris" },
];

const sliderOptions = {
  floor: 0,
  ceil: 250,
  step: 1,
  showTicks: true,
  tickStep: 25,
};

const slider = document.querySelector("#starter-slider");
slider.value = 0;
slider.options = sliderOptions;

const rangeSlider = document.querySelector("#starter-range-slider");
rangeSlider.value = 0;
rangeSlider.highValue = 250;
rangeSlider.options = sliderOptions;

const dropdown = document.querySelector("#starter-dropdown");
dropdown.options = cities;
dropdown.optionLabel = "name";
dropdown.optionValue = "code";
dropdown.dataKey = "code";

const multiselect = document.querySelector("#starter-multiselect");
multiselect.options = cities;
multiselect.optionLabel = "name";
multiselect.optionValue = "code";
multiselect.dataKey = "code";
multiselect.selected = cities.slice(0, 2);

const inputtext = document.querySelector("#starter-inputtext");
inputtext.value = "provenance-demo";

const checkbox = document.querySelector("#starter-checkbox");
checkbox.data = cities;
checkbox.optionLabel = "name";
checkbox.optionValue = "code";
checkbox.dataKey = "code";
checkbox.selected = ["New York", "Rome"];

const radiobutton = document.querySelector("#starter-radiobutton");
radiobutton.data = cities;
radiobutton.optionLabel = "name";
radiobutton.optionValue = "code";
radiobutton.dataKey = "code";
radiobutton.selected = "New York";

const widgets = [
  slider,
  rangeSlider,
  dropdown,
  multiselect,
  inputtext,
  checkbox,
  radiobutton,
];

widgets.forEach(widget => {
  widget.addEventListener("provenanceChange", event => {
    console.info(`[${widget.id}] provenanceChange`, event.detail);
  });
});

[slider, rangeSlider, dropdown, multiselect, checkbox, radiobutton].forEach(
  widget => {
    widget.addEventListener("selectedChange", event => {
      console.info(`[${widget.id}] selectedChange`, event.detail);
    });
  },
);

inputtext.addEventListener("valueChange", event => {
  console.info(`[${inputtext.id}] valueChange`, event.detail);
});

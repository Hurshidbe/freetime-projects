const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const text1 = document.querySelector(".texts1");
const text2 = document.querySelector(".texts2");
const text3 = document.querySelector(".texts3");

// Qizilni birinchi yoqamiz
red.style.opacity = 1;
orange.style.opacity = 0.2;
green.style.opacity = 0.2;

setInterval(() => {
  red.style.opacity = 1;
  orange.style.opacity = 0.2;
  green.style.opacity = 0.2;
  text2.style.opacity = 0;
  text3.style.opacity = 0;
  text1.style.opacity = 1;
}, 11000);

setTimeout(() => {
  setInterval(() => {
    red.style.opacity = 0.2;
    orange.style.opacity = 1;
    green.style.opacity = 0.2;
    text3.style.opacity = 0;
    text1.style.opacity = 0;
    text2.style.opacity = 1;
  }, 11000);
}, 5000);

setTimeout(() => {
  setInterval(() => {
    red.style.opacity = 0.2;
    orange.style.opacity = 0.2;
    green.style.opacity = 1;
    text1.style.opacity = 0;
    text2.style.opacity = 0;
    text3.style.opacity = 1;
  }, 11000);
}, 7000);

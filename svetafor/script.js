const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");

// Qizilni birinchi yoqamiz
red.style.opacity = 1;
orange.style.opacity = 0.2;
green.style.opacity = 0.2;

setInterval(() => {
  red.style.opacity = 1;
  orange.style.opacity = 0.2;
  green.style.opacity = 0.2;
}, 11000); // har 11 sekundda qaytadan

setTimeout(() => {
  setInterval(() => {
    red.style.opacity = 0.2;
    orange.style.opacity = 1;
    green.style.opacity = 0.2;
  }, 11000);
}, 5000); // 5 sekunddan keyin sariq yoqiladi

setTimeout(() => {
  setInterval(() => {
    red.style.opacity = 0.2;
    orange.style.opacity = 0.2;
    green.style.opacity = 1;
  }, 11000);
}, 7000); // 5 + 2 = 7 sekunddan keyin yashil yoqiladi

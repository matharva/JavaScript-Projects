let bgFilter = document.querySelector(".background");
let loadText = document.querySelector(".loading_text");

let load = 0;
let opacityValue = 1;
let blurValue = 30;
// loadText.style.opacity = 0.1;
const count100 = setInterval(changeLoadValue, 10);

function changeLoadValue() {
  load += 1;
  opacityValue -= 0.01;
  blurValue -= 0.3;
  loadText.innerText = `${load}%`;
  loadText.style.opacity = opacityValue;
  bgFilter.style.filter = `blur(${blurValue}px)`;
  if (load > 99) {
    clearInterval(count100);
  }
}

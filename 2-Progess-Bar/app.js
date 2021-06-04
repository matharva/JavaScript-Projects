let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let progress = document.getElementById("progress");
let circles = document.querySelectorAll(".circle");
console.log(circles);
let progressState = 0;

prevBtn.addEventListener("click", () => {
  progressState -= 1;
  checkStateAndMakeChanges();
});
nextBtn.addEventListener("click", () => {
  progressState += 1;
  console.log(progressState);
  checkStateAndMakeChanges();
});

const checkStateAndMakeChanges = () => {
  progress.style.width = `${progressState * 100}px`;
  circles.forEach((circle, index) => {
    if (index <= progressState) {
      circle.classList.add("circle--active");
    } else circle.classList.remove("circle--active");
    console.log(circle);
  });
  if (progressState == 0) {
    prevBtn.disabled = true;
  } else if (progressState == 3) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};

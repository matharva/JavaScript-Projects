buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log("Hello");
    removeAllActive();
    btn.parentElement.classList.toggle("active");
    // btn.classList
  });
});

function removeAllActive() {
  buttons.forEach((btn) => {
    // console.log("Hello");

    btn.parentElement.classList.remove("active");
    // btn.classList
  });
}

// cards = document.querySelectorAll(".card");
// console.log(cards);

// const clearHeading = () => {
//   cards.forEach((card) => {
//     if (!card.classList.contains("active")) {
//       card.children[0].style.display = "none";
//     }
//   });
// };
// clearHeading();
// cards.forEach((card) => {
//   card.addEventListener("click", () => {
//     clearActive();
//     clearHeading();
//     card.classList.add("active");
//     if (card.classList.contains("active")) {
//       card.children[0].style.display = "";
//     } else card.children[0].style.display = "none";
//   });
// });

// const clearActive = () => {
//   cards.forEach((card) => {
//     if (card.classList.contains("active")) card.classList.remove("active");
//   });
// };

let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add("card--active");
  });
});

const removeActiveClass = () => {
  cards.forEach((card) => {
    console.log("In remove");
    card.classList.remove("card--active");
  });
};

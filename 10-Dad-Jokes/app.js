const jokePlaceHolder = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// const generateJoke = () => {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokePlaceHolder.innerHTML = data.joke;
//       console.log(data);
//     });
// };

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  jokePlaceHolder.innerHTML = data.joke;
};

jokeBtn.addEventListener("click", generateJoke);

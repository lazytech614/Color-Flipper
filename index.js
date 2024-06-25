const colors = [
  "red",
  "green",
  "blue",
  "violet",
  "pink",
  "yellow",
  "orange",
  "skyblue",
  "blueviolet",
  "greenyellow",
];

const btn = document.querySelector(".btn");
const colorCode = document.querySelector("#color-code");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * colors.length);
  //   console.log(colors[randomIndex]);
  body.style.backgroundColor = colors[randomIndex];
  colorCode.innerText = `${colors[randomIndex]}`;
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const colorCode = document.querySelector("#color-code");

btn.addEventListener("click", () => {
  let hexcode = "";
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber();
    hexcode = hexcode + hex[randomNumber];
  }

  body.style.backgroundColor = `#${hexcode}`;
  colorCode.innerText = `#${hexcode}`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

const containerEl = document.querySelector(".container");
// const btnEl = document.querySelector(".btn-grad");

// btnEl.addEventListener("click", () => {
//   // console.log("clicked");
//   colorCodeNum = 50;
//   addNewImages();
// });
for (let index = 0; index < 100; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);

  const colorContainerEls = document.querySelectorAll(".color-container");
  // console.log(colorContainerEls);
  colorGenerator();
  function colorGenerator() {
    colorContainerEls.forEach((colorContainerEl) => {
      const newColorCode = randomColorCode();
      // console.log(newColorCode);
      colorContainerEl.style.backgroundColor = "#" + newColorCode;
      colorContainerEl.innerText = "#" + newColorCode;
    });
  }
}
function randomColorCode() {
  //create a variable to represent your color chars
  const chars = "01a23b45c67d8e9f";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    // console.log(randomNum);
    colorCode += chars.substring(randomNum, randomNum + 1);
    // console.log(colorCode, randomNum);
  }
  return colorCode;
}

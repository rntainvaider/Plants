const pricesButton = document.querySelectorAll(".prices__item-button");
const pricesBlock = document.querySelectorAll(".prices__item-block");
const pricesItem = document.querySelectorAll(".prices__item");
const pricesItemInner = document.querySelectorAll(".prices__item-inner");
const pricesItemArrow = document.querySelectorAll(".prices__item-arrow");

let openBlock = null;
let openItem = null;
let openItemInner = null;
let openItemArrow = null;

pricesButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    const block = pricesBlock[index];
    const currentHeight = window.getComputedStyle(block).height;

    if (openBlock && openBlock !== block) {
      openBlock.style.height = "0px";
      if (openItem) {
        openItem.classList.remove("background");
      }
      if (openItemInner) {
        openItemInner.classList.remove("background")
      }
      if (openItemArrow) {
        openItemArrow.classList.remove("transform")
      }
    }

    if (currentHeight === "0px") {
      block.style.height = `${block.scrollHeight}px`;
      pricesItem[index].classList.add("background");
      pricesItemInner[index].classList.add("background");
      pricesItemArrow[index].classList.add("transform");
      openBlock = block;
      openItem = pricesItem[index];
      openItemInner = pricesItemInner[index];
      openItemArrow = pricesItemArrow[index];
    } else {
      block.style.height = "0px";
      pricesItem[index].classList.remove("background");
      pricesItemInner[index].classList.remove("background");
      pricesItemArrow[index].classList.remove("transform");
      openBlock = null;
      openItem = null;
      openItemInner = null;
      openItemArrow = null;
    }
  });
});

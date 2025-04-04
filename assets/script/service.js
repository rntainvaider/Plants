const serviceButton = document.querySelectorAll(".service__button");
const serviceItem = document.querySelectorAll(".service__item");

serviceButton.forEach((button) => {
  button.addEventListener("click", () => {
    serviceButton.forEach((btn) => btn.classList.remove("service__activated"));

    button.classList.add("service__activated");

    const Blurred = button.dataset.blur.split(",").map(index => index.trim());

    serviceItem.forEach((element) => {
      const Indexes = String(element.dataset.index);
      const hasIndexes = Blurred.includes(Indexes);

      if (hasIndexes) {
        element.classList.add("service__blurred");
      } else {
        element.classList.remove("service__blurred");
      }
    });
  });
});

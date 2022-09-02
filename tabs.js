const tab = (id) => {
  const btn = document.querySelectorAll(`#${id} button[data-tab-btn]`);
  const content = document.querySelectorAll(`#${id} div[data-tab-content]`);

  btn.forEach((item, index) =>
    item.addEventListener("click", () => {
      btn.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");

      content.forEach((item) => item.classList.remove("active"));
      content[index].classList.add("active");
    })
  );
};

tab("tab");

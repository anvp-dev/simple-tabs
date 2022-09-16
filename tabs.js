const tab = (selector) => {
  const btn = document.querySelectorAll(`${selector} [tab-btn]`);
  const content = document.querySelectorAll(`${selector} [tab-content]`);
  
  content.forEach((item, index) => index === 0 ? true : item.style.display = 'none')

  btn.forEach((item, index) => item.addEventListener("click", () => {
    btn.forEach(btn => btn.classList.remove('tab-btn-active'))
    content.forEach(content => content.style.display = 'none')
    item.classList.add('tab-btn-active');
    content[index].style.display = 'block';
  }));
};

tab(".tb");

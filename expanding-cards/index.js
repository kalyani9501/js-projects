const elements = document.querySelectorAll('.card');

elements.forEach((item) => {
  item.addEventListener('click', () => {
    removeActiveClass();
    item.classList.add('active');
  });
});

function removeActiveClass() {
  elements.forEach((item) => {
    item.classList.remove('active');
  });
}

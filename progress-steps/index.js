const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let allCircle = document.querySelectorAll('.circle');

let currentActiveCircle = 0;
let progressValue = 0;

prev.addEventListener('click', () => {
  const item = allCircle[currentActiveCircle];
  item.classList.remove('active');

  currentActiveCircle--;

  if (currentActiveCircle === 0) {
    prev.disabled = true;
  }
  next.disabled = false;
  progressValue -= 30;
  progress.style.width = `${progressValue}%`;
});

next.addEventListener('click', () => {
  const item = allCircle[currentActiveCircle + 1]; //itemToBeActivated();
  item.classList.add('active');
  currentActiveCircle++;

  if (currentActiveCircle > 0) {
    prev.disabled = false;
  }

  if (currentActiveCircle === allCircle.length - 1) {
    next.disabled = true;
  }
  progressValue += 30;
  progress.style.width = `${progressValue}%`;
});

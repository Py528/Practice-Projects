const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circle.forEach((circles, i) => {
    if (i < currentActive) {
      circles.classList.add('active');
    } else {
      circles.classList.remove('active');
    }
  });
  let actives = document.querySelectorAll('.active');
  console.log(actives, currentActive);
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + '%';
}

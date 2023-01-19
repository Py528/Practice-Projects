const panel = document.querySelectorAll('.panel');

panel.forEach((panels) => {
  panels.addEventListener('click', () => {
    removeAC();
    panels.classList.add('active');
  });
});

function removeAC() {
  panel.forEach((panels) => {
    panels.classList.remove('active');
  });
}

let checkboxa = document.getElementById('checkbox');

checkboxa.onclick = () => {
  document.body.classList.toggle('blacked');
};

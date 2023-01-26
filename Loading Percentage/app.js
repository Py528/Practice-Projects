const loading_text = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
for (let i = 0; i < 100; i++) {
  load++;
  loading_text.innerText = `${load}%`;
  
  console.log(load);
}

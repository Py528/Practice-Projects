const loading_text = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let int = setInterval(blurring, 30);
let load = 0;
function blurring() {
	load++;
	if (load > 99) {
		clearInterval(int);
	}
	loading_text.innerText = `${load}%`;
	loading_text.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (number, inMin, inMax, outMin, outMax) => {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

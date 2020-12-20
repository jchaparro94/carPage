// Lambo Page
const loadText = document.querySelector('.loading-text');
const showcase = document.querySelector('.showcase');
const items = document.querySelectorAll('.item');

// Showcase blur / loading 
let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  showcase.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Scroll Animation

window.addEventListener('scroll', checkItems);

checkItems();

function checkItems() {
  const triggerBottom = window.innerHeight / 5 * 4;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
}
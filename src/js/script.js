// Dark mode

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});


//hambergur menu

const MenuHandler = (flag) => {
  if (flag) {
      document.getElementById("list").classList.add("top-100");
      document.getElementById("list").classList.remove("hidden");
      document.getElementById("close").classList.remove("hidden");
      document.getElementById("open").classList.add("hidden");
  } else {
      document.getElementById("list").classList.remove("top-100");
      document.getElementById("list").classList.add("hidden");
      document.getElementById("close").classList.add("hidden");
      document.getElementById("open").classList.remove("hidden");
  }
};
// slider js starts

let slides = document.querySelectorAll(".slide-ana>div");
let slideSayisi = slides.length;

let prev = document.getElementById("prev");
let next = document.getElementById("next");
for (let index = 0; index < slides.length; index++) {
  const element = slides[index];
  element.style.transform = "translateX(" + 100 * index + "%)";
}
let loop = 0 + 1000 * slideSayisi;

function goNext() {
  loop++;
  for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
  }
}

function goPrev() {
  loop--;
  for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
  }
}

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);
document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
      goNext();
  } else if (e.code === "ArrowLeft") {
      goPrev();
  }
});

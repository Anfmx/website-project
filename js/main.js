// Burger button menu appearance
const burgerButton = document.querySelector(".burger-button");
const navMenu = document.querySelector(".nav__list");

burgerButton.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

const navButtons = document.querySelectorAll(".nav__list li a");
const handleClick = () => {
  const workProcess = document.querySelector(".process__sentence");
  workProcess.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
  navMenu.classList.remove("active");
};
navButtons[3].addEventListener("click", handleClick);

//Testimonials automatic sliding

let currentIndex = 0;
const slides = document.querySelectorAll(".testimonials__slider");
const totalSlides = slides.length;

slides[currentIndex].classList.add("initial");

function showNextSlide() {
  setTimeout(() => slides[currentIndex].classList.remove("initial"), 5000);
  slides[currentIndex].classList.remove("active");
  slides[currentIndex].classList.add("exit-left");

  const nextIndex = (currentIndex + 1) % totalSlides;
  slides[nextIndex].classList.add("enter-right");
  slides[nextIndex].classList.remove("hidden");

  setTimeout(() => {
    slides[nextIndex].classList.add("active");
    slides[nextIndex].classList.remove("enter-right");

    slides[currentIndex].classList.remove("exit-left");
    slides[currentIndex].classList.add("hidden");

    currentIndex = nextIndex;

    setTimeout(showNextSlide, 5000);
  }, 500);
}
showNextSlide();

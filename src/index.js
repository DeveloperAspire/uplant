// MOBILE NAVIGATION MENU
const menuButton = document.querySelector(".menu");
const navList = document.querySelector("#nav__list");

menuButton.addEventListener("click", function () {
  navList.classList.toggle("active");
  this.classList.toggle("change-color");
});

const testimonies = document.querySelectorAll(".testimonial__box");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

testimonies.forEach((testimony, index) => {
  if (index !== 0) {
    testimony.classList.add("testimonial__hide");
  }
});

let index = 0;

const increment = () => {
  testimonies[index].classList.add("testimonial__hide");

  if (testimonies.length - 1 === index) {
    index = 0;
  } else {
    index++;
  }

  testimonies[index].classList.remove("testimonial__hide");
};

const decrement = () => {
  testimonies[index].classList.add("testimonial__hide");

  if (index === 0) {
    index = testimonies.length - 1;
  } else {
    index--;
  }

  testimonies[index].classList.remove("testimonial__hide");
};

nextBtn.addEventListener("click", () => {
  increment();
});

prevBtn.addEventListener("click", () => {
  decrement();
});

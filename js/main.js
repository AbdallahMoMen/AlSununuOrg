// Start Of Elements Varaible

let langSelector = document.querySelector(".nav-container .lang");
let langList = document.querySelector(".lang-list");
let langOptions = document.querySelectorAll(".lang-list li");
let listIcon = document.querySelector("header .container .nav-container .list-icon");
let navList = document.querySelector("header .container .nav-container .nav");

// Ending Of Elements varaible

// Starting Of Global Variables

let timer;

// Ending Of Global varaible

// Language Selector Function

langSelector.addEventListener("click", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    langList.style.opacity = "0";
    setTimeout(() => {
      langList.style.display = "none";
    }, 500);
  }, 1000);
  langList.style.display = "block";
  langList.style.opacity = "1";

  // Hide langList on scroll

  document.addEventListener("scroll", () => {
    if (langList.style.display === "block") {
      clearTimeout(timer);

      langList.style.opacity = "0";

      setTimeout(() => {
        langList.style.display = "none";
      }, 500);
    }
  });
});
// Setting Function For List-Icon PopUp

listIcon.addEventListener("click", () => {
  navList.classList.toggle("list-visible");

  // Hide nav on scroll
  document.addEventListener("scroll", () => {
    if (navList.classList.contains("list-visible")) {
      navList.classList.toggle("list-visible");
    }
  });
});

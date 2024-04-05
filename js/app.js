// loader
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const menuBtn = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");
const links = document.querySelectorAll(".mobile-nav-link");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav-open");
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `fade .5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  menuBtn.classList.toggle("toggle");
});

// web active
const linkColor = document.querySelectorAll(".nav-link");

function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

//tablet-active

const mobileLink = document.querySelectorAll(".mobile-nav-link");
function colorMobileLink() {
  mobileLink.forEach((l) => l.classList.remove("mobile-active"));
  this.classList.add("mobile-active");
}
mobileLink.forEach((l) => l.addEventListener("click", colorMobileLink));

//  mobile/small sz active
const BmobileLink = document.querySelectorAll(".mobile-b-icon");
function activeLink() {
  BmobileLink.forEach((l) => l.classList.remove("mobile-b-active"));
  this.classList.add("mobile-b-active");
}
BmobileLink.forEach((l) => l.addEventListener("click", activeLink));
// greetings
const greeting = document.getElementById("greeting");

function setGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    greeting.textContent = "Good morning, ";
  } else if (hour < 18) {
    // afternoon
    greeting.textContent = "Good afternoon, ";
  } else {
    // evening
    greeting.textContent = "Good evening, ";
  }
}
setGreeting();

// getname
const name = document.getElementById("name");

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = " [Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// setnname

function setName(e) {
  if (e.type === "keypress") {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
getName();

// Reminder

const text = [
  "Believe in yourself!",
  "You've got this!",
  "You're making a difference.",
  "Embrace your uniqueness.",
  "Stay positive!",
  "You're capable of amazing things.",
  "Your potential is limitless.",
  "Trust the process",
  "You are enough",
  "Spread kindness wherever you go.",
  "Dream big, work hard",
  "Chase your dreams fearlessly",
  "Celebrate your victories, big and small.",
  "You're a beacon of hope.",
  "Your journey matters.",
  "Keep shining bright!",
  "Your smile brightens the world.",
  "Every day is a new opportunity.",
  "You are beautiful!",
  "You're a masterpiece in progress.",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 2000);
})();

// accordion

document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("accordion-button-active");
  });
});

// modal home
const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const close = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("modal-active");
});
close.addEventListener("click", () => {
  modalBg.classList.remove("modal-active");
});

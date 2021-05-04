// Your code goes here
const nav = document.querySelectorAll("nav a");
const navArray = Array.from(nav);
const headerImg = document.querySelector(".intro img");
const heading = document.querySelector(".logo-heading");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const header = document.querySelector("header");

navArray.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    event.target.style.fontSize = "2rem";
  });
});

navArray.forEach((item) => {
  item.addEventListener("mouseout", (event) => {
    event.target.style.fontSize = "1.6rem";
  });
});

heading.addEventListener("mouseover", (event) => {
  event.target.textContent = "Beep Beep!";
  event.target.style.color = "#e1e65c";
});

heading.addEventListener("mouseout", (event) => {
  event.target.textContent = "Fun Bus";
  event.target.style.color = "black";
});

headerImg.addEventListener("click", (event) => {
  event.target.setAttribute(
    "src",
    "https://www.fivestarlimonv.com/wp-content/uploads/IMG_54091.jpg"
  );
});

//Dark Mode button
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Dark Mode 🌛";
darkModeBtn.style.color = "white";
darkModeBtn.style.backgroundColor = "#6d6e6a";
darkModeBtn.style.width = "24%";
container.append(darkModeBtn);

const darkMode = (event) => {
  if (event.target.textContent === "Dark Mode 🌛") {
    event.target.style.color = "grey";
    event.target.style.backgroundColor = "#e7e8df";
    body.style.backgroundColor = "#68707d";
    header.style.backgroundColor = "#68707d";
    header.style.color = "white";
    body.style.color = "white";
    event.target.textContent = "Light Mode 🌞";
    navArray.forEach((link) => {
      link.style.color = "white";
    });
  } else if (event.target.textContent === "Light Mode 🌞") {
    event.target.style.backgroundColor = "#6d6e6a";
    event.target.style.color = "white";
    body.style.backgroundColor = "white";
    header.style.backgroundColor = "white";
    event.target.textContent = "Dark Mode 🌛";
    body.style.color = "black";
    header.style.color = "black";
    navArray.forEach((link) => {
      link.style.color = "black";
    });
  }
};

darkModeBtn.addEventListener("click", darkMode);

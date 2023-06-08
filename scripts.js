(function () {
  const copyrightInfo = document.querySelector(".copyright-info"),
    newTextNode = document.createTextNode(
      copyrightInfo.childNodes[0].nodeValue.replace(
        "\u00a9 ",
        "\u00A9 " + new Date().getFullYear() + " "
      )
    );

  copyrightInfo.replaceChild(newTextNode, copyrightInfo.childNodes[0]);
})();

// Scripts for contact page reults
// const placeForResults = document.getElementById("results");

// new URLSearchParams(window.location.search).forEach((value, name) => {
//   placeForResults.append(`${name} : ${value}`);
//   placeForResults.append(document.createElement("br"));
// });

// Scripts for nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const sendForm = () => {
  const eeemale = ("m" +
  "a" +
  "i" +
  "l" +
  "t" +
  "o" +
  ":" +
  "p" +
  "r" +
  "i" +
  "c" +
  "e" +
  "f" +
  "u" +
  "l" +
  "l" +
  "e" +
  "r" +
  "@" +
  "g" +
  "m" +
  "a" +
  "i" +
  "l" +
  "." +
  "c" +
  "o" +
  "m");

  document.getElementById("contact-form").setAttribute(action, eeemale);
}
var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener("scroll", function () {
  /*Apply classes for slide in bar*/
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    addClass(header, "bg-white");

    removeClass(navaction, "bg-white");
    addClass(navaction, "gradient");
    removeClass(navaction, "text-gray-800");
    addClass(navaction, "text-white");

    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-gray-800");
      toToggle[i].classList.remove("text-white");
    }

    addClass(header, "shadow");
    removeClass(navcontent, "bg-gray-100");
    addClass(navcontent, "bg-white");
  } else {
    removeClass(header, "bg-white");

    removeClass(navaction, "gradient");
    addClass(navaction, "bg-white");
    removeClass(navaction, "text-white");
    addClass(navaction, "text-gray-800");

    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-gray-800");
    }

    removeClass(header, "shadow");
    removeClass(navcontent, "bg-white");
    addClass(navcontent, "bg-gray-100");
  }
});

function addClass(el, className) {
  if (el) {
    el.classList.add(className);
  }
}

function removeClass(el, className) {
  if (el) {
    el.classList.remove(className);
  }
}

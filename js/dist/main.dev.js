"use strict";

var menuToggle = document.querySelector('#menu-toggle');
var mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
  menuToggle.classList.toggle('menu-icon-active');
  mobileNavContainer.classList.toggle('mobile-nav--active');
};
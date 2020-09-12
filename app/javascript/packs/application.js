// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap'
import 'css/styles'

import "@fortawesome/fontawesome-free/js/all";

/*
console.log("si funciona");

var btnAdd = document.getElementById("btnAdd");

var addValueToInput = function () {
  var inputD = document.getElementById("inputCod");
  if (!inputD) {
    console.log("El elemento selecionado no existe");
  } else {
    var padre = inputD.parentNode;
    padre.removeChild(inputD);
  }

  //<% num_user = rand(1000000000) %>
  var num = Math.floor((Math.random() * (1000000000-100000000))+100000000);
  var input = document.createElement("input");
  var container = document.getElementById("container");

  input.type = "number";
  input.setAttribute("value", num);
  input.name = "user[num_user]";
  input.id = "inputCod";
  input.className = "d-none"; // set the CSS class
  container.appendChild(input); // put it into the DOM

  console.log(input);
};
btnAdd.addEventListener("click", addValueToInput);
*/

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

var currentBoard = [
  [0, 0, 0]
  [0, 0, 0]
  [0, 0, 0]
]

var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");
var square7 = document.getElementById("square7");
var square8 = document.getElementById("square8");
var square9 = document.getElementById("square9");


window.addEventListener("load", createGame);
square1.addEventListener("click", clickSquare);
square2.addEventListener("click", clickSquare);
square3.addEventListener("click", clickSquare);
square4.addEventListener("click", clickSquare);
square5.addEventListener("click", clickSquare);
square6.addEventListener("click", clickSquare);
square7.addEventListener("click", clickSquare);
square8.addEventListener("click", clickSquare);
square9.addEventListener("click", clickSquare);

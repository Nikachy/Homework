'use strict';
var name="Вероника";
    console.log ("Привет," + name);
    alert ("Привет," + name);

var likesCats = confirm("Тебе нравятся кошки?")
if (likesCats) {
	console.log ("Ты класная кошка!");
} else {
	console.log("Что ж, не проблема. Все равно ты молодец");
}

function changeBackground(color) {
   document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('red') });

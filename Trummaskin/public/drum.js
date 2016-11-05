var ett = document.getElementById("ett");
var tva = document.getElementById("tva");
var tre = document.getElementById("tre");
var fyra= document.getElementById("fyra");
var fem = document.getElementById("fem");
var sex = document.getElementById("sex");
var sju = document.getElementById("sju");
var atta= document.getElementById("atta");
var nio = document.getElementById("nio");
var tio = document.getElementById("tio");
var elva= document.getElementById("elva");
var tolv= document.getElementById("tolv");

	var SYNTHett = new Audio('SYNTHett.mp3');
	var SYNTHtva = new Audio('SYNTHtva.mp3');
	var SYNTHtre = new Audio('SYNTHtre.mp3');
	var FXett = new Audio('FXett.mp3');
	var FXtva = new Audio('FXtva.mp3');
	var FXtre = new Audio('FXtre.wav');
	var VOCALett = new Audio('VOCALett.wav');
	var VOCALtva = new Audio('VOCALtva.wav');
	var VOCALtre = new Audio('VOCALtre.wav');
	var KICK = new Audio('KICK.mp3');
	var HIHAT = new Audio('HIHAT.wav');
	var SNARE = new Audio('SNARE.mp3');



ett.addEventListener("touchstart", function() {
	SYNTHett.play();
})
tva.addEventListener("touchstart", function() {
	SYNTHtva.play();
})
tre.addEventListener("touchstart", function() {
	SYNTHtre.play();
})
fyra.addEventListener("touchstart", function() {
	FXett.play();
})
fem.addEventListener("touchstart", function() {
	FXtva.play();
})
sex.addEventListener("touchstart", function() {
	FXtre.play();
})
sju.addEventListener("touchstart", function() {
	VOCALett.play();
})
atta.addEventListener("touchstart", function() {
	VOCALtva.play();
})
nio.addEventListener("touchstart", function() {
	VOCALtre.play();
})
tio.addEventListener("touchstart", function() {
	KICK.play();
})
elva.addEventListener("touchstart", function() {
	HIHAT.play();
})
tolv.addEventListener("touchstart", function() {
	SNARE.play();
})



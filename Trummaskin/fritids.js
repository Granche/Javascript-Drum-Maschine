var express = require('express');
var app = express();


app.get('/', function (req, res) {

		res.sendFile("/public/drum.html", {"root": __dirname})
});


// denna raden läser in mappen 'public'
// om det kommer en GET request och den inte blir "fångad" av någon tidigare app.get så försöker express hitta den i public-mappen
// till exempel om en användare går in på http://localhost/styles/style.css kommer den hitta filen i ./public/styles/ och skicka ut den automatiskt
app.use(express.static('public'));




// skriv kod som startar servern här
// använd app.listen för att starta servern
// du måste själv leta upp koden för hur man startar servern
// var server = app.listen...


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("\n\n\n\nDAGIS - Servern är igång\n\n\ - Lyssnar på port : " + port + "\n");
  
  console.log("###########");
  
  
 });
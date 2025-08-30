
// var ultimoItem = videoGames.pop();

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

var i = 0;
while(i <= 10) {
  console.log(i);
  i = i + 5;
}

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

for(var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i])
  if(videoGames[i] === 'PS4') {
    break;
  }
}

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva'];


frutas.forEach(function(fruta, index, array) {
  console.log(fruta, index, array);
});
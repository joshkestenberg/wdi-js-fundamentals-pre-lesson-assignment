console.log('Pac-Man eats ghosts for breakfast');

var ghosts = ["blinky", "inky", "stinky"];
var name = "Pac-Man";
var sentence = "Our hero, " + name + ', must eat ' + ghosts.length + " ghosts for max pointage. They're as follows: "

console.log(sentence)

for (var index = 0; index < ghosts.length; index ++) {
  console.log(ghosts[index]);
}

// var moreGhosts = {frinky: 'cyan', slinky: 'red', kinky: 'blue'}
//
// console.log(moreGhosts['frinky']);

var powerPelletEaten = false;

while (true) {
  console.log('Ghosts remaining: ' + ghosts.length);

  if(powerPelletEaten == false) {
    console.log('Pacman eats power pellet');
    powerPelletEaten = true;
  }
  else if (ghosts.length > 0) {
    console.log('Pacman eats a ghost.');
    ghosts.pop();
  }
  else {break;}
}

console.log('Pac-Man returns home after a long day in the maze.');

var ghost = ghosts[0]
var colour;

switch (ghost) {
  case ghosts[0]:
    colour = 'Cyan';
    break;
  case  ghosts[1]:
    colour = 'Red';
    break;
  case  ghosts[2]:
    colour = 'Pink';
    break;
  case  ghosts[3]:
    colour = 'Orange';
    break;
}

console.log(ghost + ' is the colour ' + colour);
//why doesn't this work? ghost returns undefined..

var highScores = [];
function addHighScore(highScoreList, playerInitials, score) {
    var record = { player: playerInitials, score: score };
    highScoreList.push(record);
  }

addHighScore(highScores, 'SDL', 2000);
console.log(highScores)
addHighScore(highScores, 'JSL', 10000);
console.log(highScores)

function addScore(currentScore, eaten) {
  switch (eaten) {
  case 'dot':
    scoreToAdd = 10;
    break;
  case 'powerPellet':
    scoreToAdd = 50;
    break;
  case 'firstGhost':
    scoreToAdd = 200;
    break;
  case 'secondGhost':
    scoreToAdd = 400;
    break;
  }

  return currentScore + scoreToAdd;
}

var score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);

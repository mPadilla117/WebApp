var Player = Player || {};
var Game = Game || {};
var level=0;
var stage=0;

function update(progress) {
  // Update the state of the world for the elapsed time since last render
  // console.log("Hi")
  Game.stage(level);
}

function draw() {
  // Draw the state of the world
}

function loop(timestamp) {
  var progress = timestamp - lastRender

  update(progress)
  draw()
  lastRender = timestamp
  window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)

Game.stage = function(level){

  if(level == 0)//Intro
  {
    Game.level0(stage)
  }
}

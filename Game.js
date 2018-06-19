var Player = Player || {};
var intro_state;

typeWriter(0, "Hello fellow people\n", 100);

function update(progress) {
  // Update the state of the world for the elapsed time since last render
  // console.log("Hi")
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

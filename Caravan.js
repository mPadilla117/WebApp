var Player = Player || {};
// $('#t').t();

Player.readInput = function(e){

  if(e.keyCode ==13){
    var textbox = document.getElementById("textBox");
    var response = textbox.value;
    textbox.value = "";
    typeWriter(0, "Success\n", 100);
  }
}

typeWriter = function(i, txt, speed) {
  if( i < txt.length){
    document.getElementById("ta").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, i , txt, speed);
  }
}

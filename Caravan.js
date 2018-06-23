var Player = Player || {};
var textarea = document.getElementById("ta");
var textbox = document.getElementById("textBox");
var response ="";
// $('#t').t();

Player.readInput = function(e){

  if(e.keyCode ==13){
    response = textbox.value;
    textbox.value = "";
    // typeWriter("Success\n");
  }
}

var i=0;
var speed=75;
typeWriter = function(txt, color="none") {
  i=0;
  textbox.readOnly = true;
  if(color == "none") {typeWrite(txt);}
  textarea.addEventListener("msgWrote", function(){
    textbox.readOnly = false;
  } )
}

typeWrite = function(txt) {
  if( i < txt.length){
    textarea.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWrite, speed, txt);
  }
  else{
    var event = new CustomEvent("msgWrote");
    textarea.dispatchEvent(event);
  }
  return true;
}

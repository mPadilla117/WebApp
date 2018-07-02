var textarea = document.getElementById("ta");
var textbox = document.getElementById("textBox");
var response ="";
// $('#t').t();

class Player {

  constructor(){
    this.cmds = cmds;
    this.readInput = readInput();
    this.currentLevel;
  }

}

class Level {

  constructor(level){
    this.level = level;
    this.curentRoom;
    this.stage =0;
  }
}

class Room {

  constructor(name, description){
    this.name = name;
    this.description = description;
    this.objs =[];
  }
  setObjs (Interactable){
    this.objs.push(Interactable);
  }

  getObjs(){
    return this.objs;
  }

}

class Interactable{

  constructor(name, description, message){
    this.name = name;
    this.description = description;
    this.message = message;
  }
}

Player.cmds = {
        LS: { value: "ls", help: "test"},
        CAT: { value: "cat", help: "test"},
        WHOAMI: { value: "whoami", help: "test"},
        DATE: { value: "date", help: "test"},
        HELP: { value: "help", help: "test"},
        CLEAR: { value: "clear", help: "test"},
        REBOOT: { value: "reboot", help: "test"},
        CD: { value: "cd", help: "test"},
        MV: { value: "mv", help: "test"},
        RM: { value: "rm", help: "test"},
        RMDIR: { value: "rmdir", help: "test"},
        TOUCH: { value: "touch", help: "test"},
        SUDO: { value: "sudo", help: "test"},
        TEST : {value: "test", help:"get out of here"}
  };

Player.LS = function (Interactable) {
  LSpromise = new Promise((resolve, reject) => {
    for (var j=0; j< Interactable.length;j++) {
      var items="";
      items += (Interactable)[j].name + "\n";
    }
    resolve(items)
  });
  LSpromise.then((items) => {
    typeWriter(items);
  })
}



Player.readInput = function(e){

  if(e.keyCode ==13){
    response = textbox.value;
    textbox.value = "";
    // typeWriter("Success\n");
    switch(response.trim()){
      case "LS":
        Player.LS(Player.currentLevel.currentRoom.getObjs())
    }

  }
}

var i=0;
var speed=30;
typeWriter = function(txt, color="none") {
  i=0;
  textbox.readOnly = true;
  txt +="\n"
  if(color == "none") {typeWrite(txt);}
  if(color == "red") {typeWrite(txt)}
  textarea.addEventListener("msgWrote", function(){
    textbox.readOnly = false;
  } )
}

typeWrite = function(txt) {
  if(txt.charAt(i) === "<"){
    start = i;
     i = txt.indexOf(">", i)
     i = txt.indexOf(">", i+1)
     var difference = i-start
     textarea.innerHTML += txt.substr(start, difference);
     i++;
   }
  if( i < txt.length){
    textarea.innerHTML += txt.charAt(i);
    i++;
    textarea.scrollTop = textarea.scrollHeight;
    setTimeout(typeWrite, speed, txt);
  }
  else{
    var event = new CustomEvent("msgWrote");
    textarea.dispatchEvent(event);
  }
  return true;
}

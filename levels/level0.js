var Game = Game || {};
var messages = [];

level0 = new Level(0);
studyRoom = new Room("The Study", "Seems abandoned")
dustyTable = new Interactable("Book",
 "Worn and withered",
"Within these pages you discover a spell capable of undoing simple locks.\n\
The incantation reads <b id=\"purple\"> CD</b>.\n\
Perhaps you will find some use. ");
studyRoom.setObjs(dustyTable);
level0.currentRoom = studyRoom;
Player.currentLevel = level0;

messages[0]="To employers and anonymous readers,\n\
I have built this website with the intention of giving you\n\
a greater insight into \
what my interest and hobbies are. I enjoy learning new skills through interactivity \
and it is my hope to showcase and teach some of those to you. \
\nWith that being said enter \"Yes\" \
to continue.\n\
. \n\
.. \n\
... \n\
Enjoy!\n\n"

messages[1]="You find youself in a room you do not recognize. \n\
It clearly looks like a study of some sort.\n\
Type <b id=\"purple\"> LS </b> to look around.\n"
// <b id =\"purple\">LS</b>\n\
messages[2]="You cast an ancient spell but nothing happens.\n"

Game.level =function(level){

  if(level.stage == 0){
    typeWriter(messages[0], "red");
    level.stage =1;
  }
  if(level.stage ==1 && response == "Yes"){
    typeWriter(messages[1], "red");
    level.stage=2;
  }
}

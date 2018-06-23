var Player = Player || {};
var Game = Game || {};
var messages = [];

messages[0]="Hello!\n\
You look lost? Are you looking for something?\n\
\"Yes\") Of course! \"No\")Just looking[skip to site]\n"

messages[1]="\nWelcome young wizard to this ancient library!\n\
Before you can find the information that you seek, I must show you how to navigate \
this labyrinth of knowledge. Due to the vastness of this place, mundane actions \
will not help you here. Instead, I will teach you how to use magic! \
First thing first, you cast spells by saying the incantations exactly as I do. \
Don't worry! I'll spell them out for you! This first one is a simple one but \
you should always remember it. \n\
LS \n\
This will always us to search entire sections without having to lift a finger! \
Give it a try!\n"

Game.level0 =function(stagenum){

  if(stage == 0){

    typeWriter(messages[0]);
    stage =1;
  }
  if(stage ==1 && response == "Yes"){
    typeWriter(messages[1]);
    stage =2;
  }
}

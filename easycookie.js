alert("you are about to be rich on cookie clicker...")
function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
pausecomp(200);
Game.cookies = 10e+450;


for( obj in Game.Objects){ Game.Objects[obj].amount = Game.Objects[obj].amount + 10e+4; 
}

for (id in Game.ObjectsById){
    Game.ObjectsById[id].levelUp()
}

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



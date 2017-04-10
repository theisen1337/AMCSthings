var cookieCounter = 0;
var cookieCounterIncrement = 1;
var cookiesNeeded = 10;
var cookiesNeededIncrement = 10;
var level = 1;
function addCookie(){
    cookieCounter+= cookieCounterIncrement;
    if(cookieCounter > cookiesNeeded){
        level += 1;
        cookieCounterIncrement += 1;
        cookiesNeededIncrement += 15;
        cookiesNeeded += cookiesNeededIncrement;
    }
    for(var i = 0; i < level; i++){
        document.getElementById("changeMe").innerHTML += '<img height="50px" src="http://vignette1.wikia.nocookie.net/creepypasta/images/8/81/Panel-cookie-choc-cookie.png/revision/latest?cb=20160111144002" />';
        
    }
}

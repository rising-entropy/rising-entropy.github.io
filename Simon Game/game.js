var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).on("keydown", function(){
    if(!started)
    {
        $('h1').text("Level "+level);
        nextSequence();
        started = true;
    }
})



function nextSequence(){
    level++;
    $('h1').text('Level '+level);
    var randomNumber = Math.floor(10*Math.random())%4;
    var randomChosenColor = buttonColors[randomNumber];
    animatePress(randomChosenColor);
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(50).fadeIn(50);
    playSound(randomChosenColor);
    
}

$('.btn').on("click", function(event){
    var userChosenColor = event.target.classList[1];
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    }, 100);
}



function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel])
    {
        if(userClickedPattern.length == gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            }, 1000);
            userClickedPattern=[];
        }
    }
    else
    {
        var over = new Audio("sounds/wrong.mp3");
        over.play();
        $('body').addClass("game-over");
        setTimeout(function(){
            $('body').removeClass("game-over");
        }, 200);
        $('h1').text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver()
{
    level = 0;
    gamePattern = [];
    started = false;
}
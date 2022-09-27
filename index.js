var randomNumber=Math.floor((Math.random()*3)+1);
var randomImage=randomNumber+".jpg";
var rockInput=document.getElementsByTagName('button')[0];
var paperInput=document.getElementsByTagName('button')[1];
var scissorInput=document.getElementsByTagName('button')[2];
var heading= document.getElementsByTagName('h1')[0];

rockInput.onclick=function(){
    document.getElementById("player-1").setAttribute("src",randomImage);
    document.getElementById("player-2").setAttribute("src","3.jpg");
    if (randomNumber===1){
        heading.innerText="You won!";
    }else if(randomNumber===2){
        heading.innerText="Player-1 won!";
    }else{
        heading.innerText="It's a Draw!";
    }
}
paperInput.onclick=function(){
    document.getElementById("player-1").setAttribute("src",randomImage);
    document.getElementById("player-2").setAttribute("src","2.jpg");
    if (randomNumber===1){
        heading.innerText="Player-1 won!";
    }else if(randomNumber===2){
        heading.innerText="It's a Draw!";
    }else{
        heading.innerText="You won!";
    }
}
scissorInput.onclick=function(){
    document.getElementById("player-1").setAttribute("src",randomImage);
    document.getElementById("player-2").setAttribute("src","1.jpg");
    if (randomNumber===1){
        heading.innerText="It's a Draw!";
    }else if(randomNumber===2){
        heading.innerText="You won!";
    }else{
        heading.innerText="Player-1 won!";
    }
}
var playAgain=document.getElementsByTagName('button')[3];
playAgain.onclick=function(){
    location.reload()
}
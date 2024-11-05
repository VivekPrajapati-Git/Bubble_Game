var time=60;
var Score=0;
var hitrn;

function MakeBubble(){
    var clutter="";

    for (var i=1;i<=(19*6);i++){
        var random_num = Math.floor(Math.random()*10);
        clutter += `<div id="bubble">${random_num}</div>`;
    }

    document.querySelector("#panelbottom").innerHTML=clutter;
}

function Timer(){
    var timeint = setInterval(function(){
        if (time>0){
            time--;
            document.querySelector("#timerval").textContent=time;
        }
        else{
            document.querySelector("#panelbottom").innerHTML=`<h1>Game Over , Your Score is ${Score}</h1>`;
            clearInterval(timeint);
        }
    },1000)
}

function Hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit-item").textContent = hitrn;
}

function IncreaseScore(){
    Score+=10;
    document.querySelector("#Scoreval").textContent=Score
}

document.querySelector("#panelbottom")
.addEventListener("click",function(details){
    var dets= Number(details.target.textContent);
    if (hitrn === dets ){
        IncreaseScore();
        MakeBubble();
        Hit();
    }
})

MakeBubble();
Timer();
Hit();

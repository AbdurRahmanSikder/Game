function ready() {
    var cut = "";
    for (var i = 1; i <= 119; i++) {
        var tmp = Math.floor(Math.random() * 10);
        cut += `<button class="circle">${tmp}</button>`;
    }
    document.querySelector(".pbtm").innerHTML = cut;
}
var time = 6;
function start() {
    var timmer = setInterval(function () {
        document.querySelector(".box2").textContent = time--;
        if (time == -1) {
            clearInterval(timmer);
            document.querySelector(".pbtm").textContent="";
            document.querySelector(".pbtm").textContent='Game Over';

        }
    }, 1000);
}
var tx;
function hit(){
    tx = Math.floor(Math.random()*10);
    document.querySelector(".box1").textContent = tx;
}
var fs = 0;
function score(){
    var t1 = document.querySelector(".pbtm");
    var t2 = t1.addEventListener("click",function (dets){
        var ck = Number(dets.target.textContent);
        if(ck == tx)
        {
            fs+=1;
            hit();
            score();
            document.querySelector(".box3").textContent=fs;
        }
    });
}
ready();
start();
hit();
score();
//svg-name

const lines = document.querySelectorAll(".line");

window.addEventListener("load", start);

function start() {
    lines.forEach(drawThis);
}

function drawThis(line, i){
console.log(i);
setTimeout(function (){
    line.classList.add("draw");
    }, i * 1000);
}

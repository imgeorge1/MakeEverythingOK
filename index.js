
document.getElementsByClassName("progress")[0].classList.add("hide");
document.getElementsByClassName("done")[0].classList.add("hide");

function Close() {
    document.getElementsByClassName("progress")[0].classList.add("hide");
    document.getElementsByClassName("done")[0].classList.add("hide");
    document.getElementsByClassName("pushable")[0].classList.remove("blur");
    document.getElementsByClassName("progress")[0].classList.remove("blur");
}

var click = new Audio("btnClick.mp3");
document.querySelector(".pushable").addEventListener("click", function() {
  click.play()
})

function Meo(){
    // var click = new Audio("btnClick.mp3");
    // click.play()

    document.getElementsByClassName("pushable")[0].classList.add("blur");
    document.getElementsByClassName("progress")[0].classList.remove("hide");

    move();
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementsByClassName("done")[0].classList.remove("hide");
        document.getElementsByClassName("progress")[0].classList.add("blur");
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}


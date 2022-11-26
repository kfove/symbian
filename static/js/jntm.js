document.onkeydown = function (e) {
  let key = e.keyCode;
  if (key == 74) {
    let audio = document.getElementById("ji");
    audio.play();
  }
  if (key == 78) {
    let audio = document.getElementById("ni");
    audio.play();
  }
  if (key == 84) {
    let audio = document.getElementById("tai");
    audio.play();
  }
  if (key == 77) {
    let audio = document.getElementById("mei");
    audio.play();
  }
};

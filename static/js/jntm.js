document.onkeydown = function (e) {
  let key = e.key;
  if (key == 'j') {
    let audio = document.getElementById("ji");
    audio.play();
  }
  if (key == 'n') {
    let audio = document.getElementById("ni");
    audio.play();
  }
  if (key == 't') {
    let audio = document.getElementById("tai");
    audio.play();
  }
  if (key == 'm') {
    let audio = document.getElementById("mei");
    audio.play();
  }
};

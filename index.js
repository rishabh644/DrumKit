const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  let ky = buttons[i].innerHTML;
  buttons[i].addEventListener("click", function () {
    playsound(ky);
    effect(ky);
  });
}

document.addEventListener("keydown", function (evnt) {
  playsound(evnt.key);
  effect(evnt.key);
});

function playsound(keyy) {
  let ad;
  switch (keyy) {
    case "w":
      ad = new Audio("sounds/w.mp3");
      ad.play();
      break;
    case "a":
      ad = new Audio("sounds/a.mp3");
      ad.play();
      break;
    case "s":
      ad = new Audio("sounds/s.mp3");
      ad.play();
      break;
    case "d":
      ad = new Audio("sounds/d.mp3");
      ad.play();
      break;
    case "j":
      ad = new Audio("sounds/j.mp3");
      ad.play();
      break;
    case "k":
      ad = new Audio("sounds/k.mp3");
      ad.play();
      break;
    case "l":
      ad = new Audio("sounds/l.mp3");
      ad.play();
      break;
    default:
      break;
  }
}

function effect(ky) {
  document.querySelector(`.${ky}`).classList.add("pressed");
  setTimeout(function () {
    document.querySelector(`.${ky}`).classList.remove("pressed");
  }, 100);
}

let avatarImg = document.getElementById("avatar-img");
let avatarImgs = [
  "./public/img/avatar-1.png",
  "./public/img/avatar-2.png",
  "./public/img/avatar-3.png",
  "./public/img/avatar-5.png",
  "./public/img/avatar-4.png",
];

let imgIndex = 0;

setInterval(() => {
  avatarImg.src = avatarImgs[imgIndex];
  imgIndex > 3 ? (imgIndex = 0) : imgIndex++;
}, 800);

// WORD CHANGING

consoleText(["Hello World.", "Console Text", "Made with Love."], "word-flick", [
  "tomato",
  "rebeccapurple",
  "lightblue",
]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "text-cursor  hidden";
      visible = false;
    } else {
      con.className = "text-cursor";

      visible = true;
    }
  }, 400);
}

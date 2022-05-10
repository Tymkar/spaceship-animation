const container = document.querySelector(".container");
const rocket = document.querySelector(".rocket");

container.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  rocket.style.left = mouseX + "px";
});

function makeMeteor() {
  meteorCount = 50;
  i = 0;

  while (i < meteorCount) {
    meteor = document.createElement("i");
    meteor.classList.add("meteor");
    windowX = Math.floor(Math.random() * window.innerWidth);

    duration = Math.random() * 1;

    meteorWidth = Math.random() * 3;
    meteorHeight = Math.random() * 150;

    meteor.style.left = windowX + "px";
    meteor.style.width = meteorWidth + "px";
    meteor.style.height = meteorHeight + "px";
    meteor.style.animationDuration = duration + "s";

    container.appendChild(meteor);
    i++;
  }
}

function makeStar() {
  starCount = 50;
  j = 0;

  while (j < starCount) {
    star = document.createElement("i");
    star.classList.add("meteor");
    windowX = Math.floor(Math.random() * window.innerWidth);

    duration = Math.random() * 1;

    starWidth = 5;
    starHeight = 5;

    star.style.left = windowX + "px";
    star.style.width = starWidth + "px";
    star.style.height = starHeight + "px";
    star.style.animationDuration = duration + "s";
    star.style.borderRadius = "50%";

    container.appendChild(star);
    j++;
  }
}

makeMeteor();
makeStar();

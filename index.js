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

makeMeteor();

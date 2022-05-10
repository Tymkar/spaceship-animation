const container = document.querySelector(".container");
const rocket = document.querySelector(".rocket");

container.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  rocket.style.left = mouseX + "px";
});

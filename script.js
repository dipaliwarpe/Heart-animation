const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanElememnt = document.createElement("span");
  spanElememnt.style.left = xPos + "px";
  spanElememnt.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanElememnt.style.width = size + "px";
  spanElememnt.style.height = size + "px";
  bodyElement.appendChild(spanElememnt);
  setTimeout(() => {
    spanElememnt.remove();
  }, 3000);
});
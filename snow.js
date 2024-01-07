document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".snowfall-container");

  // Create snowflakes
  for (let i = 0; i < 30; i++) {
    createSnowflake(container);
  }
});

function createSnowflake(container) {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  container.appendChild(snowflake);

  // Set initial position
  const initialX = Math.random() * window.innerWidth;
  const initialY = Math.random() * window.innerHeight;
  snowflake.style.left = initialX + "px";
  snowflake.style.top = initialY + "px";

  // Animation
  function snowfall() {
    const speed = Math.random() * 2 + 1;
    const translateY = snowflake.offsetTop + speed;
    const translateX =
      snowflake.offsetLeft + Math.sin(snowflake.offsetTop / 50) * 2;

    if (translateY > window.innerHeight) {
      snowflake.style.top = 0;
      snowflake.style.left = Math.random() * window.innerWidth + "px";
    } else {
      snowflake.style.top = translateY + "px";
      snowflake.style.left = translateX + "px";
    }

    requestAnimationFrame(snowfall);
  }

  snowfall();
}

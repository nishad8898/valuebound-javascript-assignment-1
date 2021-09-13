let score = Number(document.querySelector(".counter").textContent);

document.querySelector(".decrement").addEventListener("click", function () {
  if (!score <= 0) {
    score -= 1;
    document.querySelector(".counter").textContent = score;
  }
});

document.querySelector(".increment").addEventListener("click", function () {
  score += 1;
  document.querySelector(".counter").textContent = score;
});

document.querySelector(".reset").addEventListener("click", function () {
  score = 0;
  document.querySelector(".counter").textContent = score;
});

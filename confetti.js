const jsConfetti = new JSConfetti();

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    jsConfetti.addConfetti({
      emojis: ["🤦‍♂️", "👀", "😬", "🤦‍♂️"],
    });
  });
});

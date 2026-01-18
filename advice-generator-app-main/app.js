const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice");

diceBtn.addEventListener("click", getAdvice);

function getAdvice() {
  adviceText.textContent = "Loading...";

  fetch("https://api.adviceslip.com/advice", {
    cache: "no-store"
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    })
    .then(data => {
      adviceId.textContent = `ADVICE #${data.slip.id}`;
      adviceText.textContent = `"${data.slip.advice}"`;
    })
    .catch(error => {
      adviceText.textContent = "Something went wrong. Try again.";
      console.error(error);
    });
}

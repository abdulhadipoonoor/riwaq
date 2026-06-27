document.querySelector("button").addEventListener("click", function(){
  window.location.href = "#";
});
function toggleDarkMode(){
  document.body.classList.toggle("dark");
}
document.getElementById("searchBox").addEventListener("keyup", function(){
  let value = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

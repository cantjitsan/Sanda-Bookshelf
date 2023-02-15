const form = document.querySelector("#form");
const input = document.querySelector("#textarea");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = input.value;
  window.location.href = `result.html?q=${searchTerm}`;
});

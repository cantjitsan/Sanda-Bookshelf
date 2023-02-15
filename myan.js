const form = document.querySelector("#form");
const input = document.querySelector("#textarea");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = input.value;
  window.location.href = `result.html?q=${searchTerm}`;
});

const bookDiv = document.querySelector("#b1");

bookDiv.addEventListener("mouseover", () => {
  const downloadBtn = document.createElement("button");
  downloadBtn.innerText = "Download now";
  downloadBtn.style.position = "absolute";
  downloadBtn.style.top = "50%";
  downloadBtn.style.left = "50%";
  downloadBtn.style.transform = "translate(-50%, -50%)";
  bookDiv.parentElement.appendChild(downloadBtn);

  downloadBtn.addEventListener("click", () => {
    window.location.href = "https://drive.google.com/file/d/0B7HZIUBvCH1EanRRdF91S2xRQUk/view?resourcekey=0-wpcR9Bu2meLzvYcumOha6Q";
  });
});

bookDiv.addEventListener("mouseout", () => {
  const downloadBtn = bookDiv.parentElement.querySelector("button");
  if (downloadBtn) {
    downloadBtn.remove();
  }
});


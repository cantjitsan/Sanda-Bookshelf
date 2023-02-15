const results = document.querySelector("#results");
const searchTerm = new URL(window.location.href).searchParams.get("q");
const maxResults = 40;
let startIndex = 0;

const fetchBooks = (startIndex) => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}`)
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach((item) => {
        const title = item.volumeInfo.title;
        const authors = item.volumeInfo.authors
          ? item.volumeInfo.authors.join(", ")
          : "Unknown";
        const image = item.volumeInfo.imageLinks
          ? item.volumeInfo.imageLinks.thumbnail
          : "";
        const downloadLink = item.accessInfo.webReaderLink;

        const result = document.createElement("div");
        result.innerHTML = `
          <img src="${image}" alt="Cover Image">
          <h2>${title}</h2>
          <p>By: ${authors}</p>
          <button onclick="window.open('${downloadLink}', '_blank')">Download</button>
        `;
        results.appendChild(result);
      });
      
      if (data.totalItems > startIndex + maxResults) {
        fetchBooks(startIndex + maxResults);
      }
    });
};

fetchBooks(startIndex);

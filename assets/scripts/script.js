const loadingIcon = document.getElementById("loadingIcon");

// Show the loading icon
loadingIcon.style.display = "block";

fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b958ba6bcead4c1b8f45d7f5d64b4e96")
  .then((response) => response.json())
  .then((data) => {
    let tableData = data.articles.map((article) => {
      if (article.urlToImage) {
        return `
          <div class="news-card">
            <div class="news-image-container">       
              <img class="news-image" src="${article.urlToImage}" alt="News Image"/>
            </div>
            <div class="news-content">
              <h3 class="news-author alert alert-primary">${article.title}</h3>
              <p class="news-text">${article.content}</p>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="news-card">
            <div class="news-content">
              <h3 class="news-author alert alert-primary">${article.title}</h3>
              <p class="news-text">${article.content}</p>
            </div>
          </div>
        `;
      }
    });

    let newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = tableData.join(" ");

    // Hide the loading icon once the data is shown
    loadingIcon.style.display = "none";
  })
  .catch((error) => {
    // Handle any errors that occur during the request
    console.error('Error:', error);

    // Hide the loading icon in case of an error
    loadingIcon.style.display = "none";
  });


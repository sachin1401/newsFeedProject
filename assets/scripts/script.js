const loadingIcon = document.getElementById("loadingIcon");

// Show the loading icon
loadingIcon.style.display = "block";

fetch("https://inshorts.deta.dev/news?category=all")
  .then((data) => { 
    return data.json();
  }) 
  .then((objectData) => {
    let tableData = objectData.data.map((values) => {
      return `        <div class="news-card">
                      <div class="news-image-container">
                        <img class="news-image" src="${values.imageUrl}" alt="News Image"/>
                      </div>
                      <div class="news-content">
                        <h3 class="news-author alert alert-primary"> ${values.title}</h3>
                        <p class="news-text">${values.content}</p>
                      </div>
                    </div>
              `;
    });
    let value = document.getElementById("newsContainer");
    value.innerHTML = tableData;

    // Hide the loading icon once the data is shown
    loadingIcon.style.display = "none";
  });


// new news load category
const categorySelect = document.getElementById("categorySelect");
const newsContainer = document.getElementById("newNewsContainer");

categorySelect.addEventListener("change", () => {
  const selectedCategory = categorySelect.value;
  const apiUrl = `https://inshorts.deta.dev/news?category=${selectedCategory}`;

  fetch(apiUrl) 
    .then(response => response.json())
    .then(objectData => {
      const newsCards = objectData.data.map(values => {
        return `        
          <div class="news-card">
            <div class="news-image-container">
              <img class="news-image" src="${values.imageUrl}" alt="News Image"/>
            </div>
            
            <div class="news-content">
                            
              <h3 class="news-author alert alert-primary">${values.title}</h3>
              <p class="news-text">${values.content}</p>
              <a class="read-more-link" href="#" >${values.time}</a>            
            </div>
          </div>
        `;
      });

      newsContainer.innerHTML = newsCards.join("");
    })
    .catch(error => {
      console.log("Error fetching API data:", error);
    });
    loadingIcon.style.display = "none";
});



const loadingIcon = document.getElementById("loadingIcon");

// Show the loading icon
loadingIcon.style.display = "block";

fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b958ba6bcead4c1b8f45d7f5d64b4e96")
  .then((response) => response.json())
  .then((data) => {
    let tableData = data.articles.map((article) => {
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
    });

    let newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = tableData.join("");

    // Hide the loading icon once the data is shown
    loadingIcon.style.display = "none";
  })
  .catch((error) => {
    // Handle any errors that occur during the request
    console.error('Error:', error);

    // Hide the loading icon in case of an error
    loadingIcon.style.display = "none";
  });
// ************************************
// category section

const categorySelect = document.getElementById("categorySelect");
const newsContainer = document.getElementById("newNewsContainer");
// const loadingIcon = document.getElementById("loadingIcon");
// loadingIcon.style.display = "block";

categorySelect.addEventListener("change", () => {
  const selectedCategory = categorySelect.value;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=b958ba6bcead4c1b8f45d7f5d64b4e96`;

  // Show the loading icon
  loadingIcon.style.display = "block";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let tableData = data.articles.map((article) => {
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
      });

      newsContainer.innerHTML = tableData.join("");

      // Hide the loading icon once the data is shown
      loadingIcon.style.display = "none";
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error('Error:', error);

      // Hide the loading icon in case of an error
      loadingIcon.style.display = "none";
    });
});




// const loadingIcon = document.getElementById("loadingIcon");

// // Show the loading icon
// loadingIcon.style.display = "block";

// fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b958ba6bcead4c1b8f45d7f5d64b4e96")
//   .then((data) => { 
//     return data.json();
//   }) 
//   .then((objectData) => {
//     let tableData = objectData.data.map((values) => {
//       return `        <div class="news-card">
//                       <div class="news-image-container">
//                         <img class="news-image" src="${values.imageUrl}" alt="News Image"/>
//                       </div>
//                       <div class="news-content">
//                         <h3 class="news-author alert alert-primary"> ${values.title}</h3>
//                         <p class="news-text">${values.content}</p>
//                       </div>
//                     </div>
//               `;
//     });
//     let value = document.getElementById("newsContainer");
//     value.innerHTML = tableData;

//     // Hide the loading icon once the data is shown
//     loadingIcon.style.display = "none";
//   });


// new news load category
// const categorySelect = document.getElementById("categorySelect");
// const newsContainer = document.getElementById("newNewsContainer");

// categorySelect.addEventListener("change", () => {
//   const selectedCategory = categorySelect.value;
//   const apiUrl = `https://inshorts.deta.dev/news?category=${selectedCategory}`;

//   fetch(apiUrl) 
//     .then(response => response.json())
//     .then(objectData => {
//       const newsCards = objectData.data.map(values => {
//         return `        
//           <div class="news-card">
//             <div class="news-image-container">
//               <img class="news-image" src="${values.imageUrl}" alt="News Image"/>
//             </div>
            
//             <div class="news-content">
                            
//               <h3 class="news-author alert alert-primary">${values.title}</h3>
//               <p class="news-text">${values.content}</p>
//               <a class="read-more-link" href="#" >${values.time}</a>            
//             </div>
//           </div>
//         `;
//       });

//       newsContainer.innerHTML = newsCards.join("");
//     })
//     .catch(error => {
//       console.log("Error fetching API data:", error);
//     });
//     loadingIcon.style.display = "none";
// });



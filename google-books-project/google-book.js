import createBookElement from "./google-doms-util.js";


const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";

const getSearchUrl = (searchTerm) => {
    return urlBase + searchTerm;
};

const search = async (searchTerm) => {
    const requestPromise = fetch(getSearchUrl(searchTerm));
    const response = await requestPromise;
    const searchData = await response.json();
  
    const bookDataTemplate = searchData.items.map((data) => {
        const output = {};

        // <---- Book Title ------> //
        if (data.volumeInfo.title) {
        output.Title = data.volumeInfo.title;
        } else {
        output.Title = "Title not available";
}
        // <----- AUTHORS ----> //
        if (data.volumeInfo.authors) {
          output.Author = data.volumeInfo.authors;
        } else {
          output.Author = "Author is not known, please try again";
        }

        // <----- Description ---> //

        if (data.volumeInfo.description) {
          output.Description = data.volumeInfo.description;
        } else {
          output.Description = "Not available";
        }
        
        // <---- Images -----> //
        if (data.volumeInfo.imageLinks.smallThumbnail) {
          output.Image = data.volumeInfo.imageLinks.smallThumbnail;
        } else {
          output.Image = "Image not available";
        }
       
        return output;
      });

      createBookElement(bookDataTemplate);
  };

  
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("searchBarInput").value;
    search(searchInput);
});

 

// Started from the bottom now we here 
// const clearResults = () => {
//   document.getElementById("searchBarInput").value = "";
//   document.getElementById("results1").innerText = "";
//   document.getElementById("results2").innerText = "";
//   document.getElementById("results3").innerText = "";
//   document.getElementById("results4").innerText = "";
//   document.getElementById("results5").innerText = "";
//   document.getElementById("results6").innerText = "";
//   document.getElementById("results7").innerText = "";
//   document.getElementById("results8").innerText = "";
//   document.getElementById("results9").innerText = "";

// };

// Need to return the text of what the user added in the search bar. What user has entered is going through your search function

// SUCCEEDED IN CREATING A MODULE WOOT WOOT <----- Creating new JS file to create Elements while looping
      //   const books = [0, 1, 2, 3, 4, 5, 6, 7, 8];

      //   for (let i = 0; i < books.length; i++) {
      //     let gridResultsNumber = books[i];
      //     document.getElementById("title" + gridResultsNumber).innerText =
      //         bookData[gridResultsNumber].bookTitle;
    
      //     document.getElementById("auth" + gridResultsNumber).innerText =
      //         bookData[gridResultsNumber].bookAuthors;
    
      //     document.getElementById("description" + gridResultsNumber).innerText =
      //         bookData[gridResultsNumber].bookDescription;
    
    
      //     document.getElementById("image" + gridResultsNumber).src =
      //         bookData[gridResultsNumber].bookImage.thumbnail; 
    
      // };
      
      // return output;
      // };

      
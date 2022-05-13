  // <----- creating an Element for the book results and targeting each result by creating an Array to target Index -------> //

  // <----- Note to self: Default exports are useful to export only a single object, function, variable. During the import, we can use any name to import. -----> //
  const createBookElement = (array) => {
  const bookIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // <---- for loop while creating elements ----->
  for (let i = 0; i < bookIndex.length; i++) {
  const bookIndexTarget = bookIndex[i];

  // <---- Title -----> //
  const newElementTitle = document.createElement("h4");

  // <---- Note to self: The appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node. ------> //
  const nodeTitle = document.createTextNode(

  // <--- Add Template literal Strings for all the book sections ----> //
    `Title: ${array[bookIndexTarget].Title}`
  );
  
  newElementTitle.appendChild(nodeTitle);
  const parentTypeTitle = document.getElementById("results" + bookIndexTarget);
  parentTypeTitle.appendChild(newElementTitle); 

  // <--- Applying same knowledge on how Title was created to Author, Description and Image. Image requires source. So use setAttribute
 
  // <--- Author ----> //
  const newElementAuthor = document.createElement("h5");
  const nodeAuthor = document.createTextNode(`Author: ${array[bookIndexTarget].Author}`);
  newElementAuthor.appendChild(nodeAuthor);
  const parentTypeAuthor = document.getElementById("results" + bookIndexTarget);
  parentTypeAuthor.appendChild(newElementAuthor);


 // <--- Description ----> //
  const newElementDescription = document.createElement("p");
  const nodeDescription = document.createTextNode(`Description: ${array[bookIndexTarget].Description}`);
  newElementDescription.appendChild(nodeDescription);
  const parentTypeDescription = document.getElementById("results" + bookIndexTarget);
  parentTypeDescription.appendChild(newElementDescription);

 // <-- Images ---> //
 const newElementImage = document.createElement("img");
 newElementImage.setAttribute("src", array[bookIndexTarget].Image);
 newElementImage.setAttribute("alt", "na");
 const parentTypeImage = document.getElementById("results" + bookIndexTarget);
 parentTypeImage.appendChild(newElementImage);

  }

};

export default createBookElement;
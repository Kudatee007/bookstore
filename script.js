const books = [
  {
    title: "Little Women",
    image: "/images/littlewomen.png",
  },
  {
    title: "A Christmas Tale",
    image: "/images/christmastale.png",
  },
  {
    title: "How to Stop Worrying and Start Living",
    image: "/images/stopworrying.png",
  },
  {
    title: "The Amazing Results of Positive Thinking",
    image: "/images/amazingresults.png",
  },
  {
    title: "Hot Water",
    image: "/images/hotwater.png",
  },
  {
    title: "Sea of Poppies",
    image: "/images/seaofpoppies.png",
  },
  {
    title: "The Monk Who Sold His Ferrari",
    image: "/images/monkferari.png",
  },
  {
    title: "Pride and Prejudice",
    image: "/images/prideandprejudice.png",
  },
  {
    title: "Principle Centered Leadership",
    image: "/images/pcl.png",
  },
  {
    title: "The Alchemist",
    image: "/images/thealchemist.png",
  },
];

const bookContainer = document.getElementById("book-list");

// Function to add "Unavailable" text to a specific book when clicked
function addText(bookDiv) {
  let text = bookDiv.querySelector(".span-text");

  if (text) {
    text.remove();
  } else {
    text = document.createElement("span");
    text.textContent = "Unavailable";
    text.classList.add("span-text");
    bookDiv.appendChild(text);
  }
}

function btnClicked() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the parent .book div of the clicked button
      const bookDiv = button.closest(".book");
      // Select the image inside this specific book div
      const image = bookDiv.querySelector(".image");
      // Apply blur only to this image
      if (button.textContent === "Borrow Book") {
        image.style.filter = "blur(5px)";
        button.textContent = "Return Book";
      } else {
        image.style.filter = "none";
        button.textContent = "Borrow Book";
      }
      
      addText(bookDiv);
    });
  });
}

function displayBooks() {
  bookContainer.innerHTML = "";
  books.forEach((book) => {
    bookContainer.innerHTML += `
        <div class="book">
          <img src="${book.image}" alt="${book.title}" class="image"/>
          <h2>${book.title}</h2>
         <button class="btn">Borrow Book</button>
         </div>
         `;
  });
  btnClicked();
}

displayBooks();
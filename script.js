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

function displayBooks() {
  books.forEach((book) => {
    bookContainer.innerHTML += `
      <div class="book">
        <img src="${book.image}" alt="${book.title}" />
        <h2 class"book-title">${book.title}</h2>
        <button>Borrow Book</button>
      </div>
    `;
  });
}

displayBooks();


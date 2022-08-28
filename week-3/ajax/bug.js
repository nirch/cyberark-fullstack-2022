let books = undefined;

$.ajax({
  url: 'https://www.googleapis.com/books/v1/volumes?q=potter',
  success: function (data) {
    books = data.items;
    books.forEach(book => console.log(book.volumeInfo.title));
    foo();
  },
});

function foo() {
  console.log(books.length);
}

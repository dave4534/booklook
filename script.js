$(document).ready();


// var bookArray = [
// // please assume a user reads 1 page per minute
//   {
//   bookTitle: "Hero", 
//   bookDesc: "This is a great book",
//   bookAuthor: "John Smith",
//   bookImg: "url: www.google.com",
//   numberPages: 300,
//   dailyMinutesRead: 45
//   },
//   {
//   bookTitle: "Hero2", 
//   bookDesc: "This is a great book",
//   bookAuthor: "John Smith",
//   bookImg: "url: www.google.com",
//   numberPages: 300,
//   dailyMinutesRead: 45
//   },
//   {
//   bookTitle: "Hero3", 
//   bookDesc: "This is a great book",
//   bookAuthor: "John Smith",
//   bookImg: "url: www.google.com",
//   numberPages: 300,
//   dailyMinutesRead: 45
//   }
// ];

// renderAllData(bookArray);
var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    dataType: "json",
    success: function(data) {
    alert('data');

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('ERROR');
    }
  }); 
};

$('#search').on("click", function(){
  fetch();

});

var readTime = Math.ceil(data.items["0"].volumeInfo.pageCount /60);

var dataObj = {
  books: [
    {pages: readTime},
    {title: data.items["0"].volumeInfo.title},
    {description: data.items["0"].volumeInfo.description},
    {author: data.items["0"].volumeInfo.authors["0"]},
    {image: data.items["0"].volumeInfo.imageLinks.smallThumbnail}
  ]
};

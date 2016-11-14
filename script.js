

var book = {
  bookTime: 1987,
  bookTitle: "hero", 
  bookDesc: "This is a great book",
  bookAuthor: "John Smith",
  bookImg: "url: www.google.com"
};

// 3. Select the script by ID, and with .html return the inner HTML
var source = $('#booklookTemplate').html();

// 4. compile our template to js html using handlebars
var template = Handlebars.compile(source);

// 5. Fill our template (the compiled code) 
var newHTML = template(book);

// 6. Append our compiled html to the page
$('.bookAppend').append(newHTML);

// 1. Get the book title from object to appear 
// in the book title in html
// $('button').on("click", function(){
//   alert('Hi');
// });



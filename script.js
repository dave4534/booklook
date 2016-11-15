
var bookArray = [
// please assume a user reads 1 page per minute
  {
  bookTitle: "Hero", 
  bookDesc: "This is a great book",
  bookAuthor: "John Smith",
  bookImg: "url: www.google.com",
  numberPages: 300,
  dailyMinutesRead: 45
  },
  {
  bookTitle: "Hero2", 
  bookDesc: "This is a great book",
  bookAuthor: "John Smith",
  bookImg: "url: www.google.com",
  numberPages: 300,
  dailyMinutesRead: 45
  },
  {
  bookTitle: "Hero3", 
  bookDesc: "This is a great book",
  bookAuthor: "John Smith",
  bookImg: "url: www.google.com",
  numberPages: 300,
  dailyMinutesRead: 45
  }
];


// // 3. Select the script by ID, and with .html return the inner HTML
// var source = $('#booklookTemplate').html();

// // 4. compile our template to js html using handlebars
// var template = Handlebars.compile(source);

// // 5. Fill our template (the compiled code) 
// var newHTML = template(bookArray);

// // 6. Append our compiled html to the page
// $('.bookAppend').append(newHTML);

// take data convert it to html and append it



var renderAllData = function (data) {
  for (var i = 0; i < data.length; i += 1) {
    var source = $('#booklookTemplate').html();
    var template = Handlebars.compile(source);
    var newHTML = template(data[i]);
    var input = $('bookTitle').val();
    if (input === newHTML){
      $('.books').append(newHTML);
    }
  }
};

renderAllData(bookArray);



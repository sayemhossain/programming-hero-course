var favoriteBook = "math";

// Array
var bookList = ["bangla", "english", "physic", "higher math"];

var physicBookIndex = bookList.indexOf("physic");
console.log(physicBookIndex);
bookList[1] = "biology";
console.log(bookList);
bookList.push("english");
console.log(bookList);
bookList.pop("english");
console.log(bookList);

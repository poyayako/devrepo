

//this is my notes for oop using javascript
function Book(title,author,year){
this.title = title;
this.author = author;
this.year = year;
};



const book1 = new Book('mark leos journey','leoleo','2020');

Book.prototype.getSummary = function(){

return `${this.title} was written ${this.author} in ${this.year}`;

};

Book.prototype.getAge = function() {

const years = new Date().getFullYear - this.year;

return `${this.title} is ${years} years old`;
};



console.log(book1);

console.log(book1.getAge.years);



module.exports = Book;


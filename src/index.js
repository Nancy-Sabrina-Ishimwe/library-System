
const {add, displayAll, update, updateMany, remove } = require("./controller/libarymanagement");

var newBook1 ={
    
        id: 6,
        title: 'Harry Potter',
        author: 'J.K.Rowling',
        year: 1925 
       };
       add(newBook1);



    
    displayAll();
    update(3,"title","eat well");

   var bookupdated ={
     title: 'Mary bridge',
    author: 'Peter',
    year: 1925 
   };
   updateMany(4,bookupdated);
    remove(5);
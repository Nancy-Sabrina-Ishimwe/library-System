
const {add, displayAll, update, updateMany, remove } = require("./controller/libarymanagement");

const newBook1 ={
    
        id: 6,
        title: 'Harry Potter',
        author: 'J.K.Rowling',
        year: 1925 
       },

const updateMany ={ 3 ,"title":"Eating well","author":"George Orwell"},

    add(newBook1);
    displayAll();
    update();
    updateMany;
    remove()
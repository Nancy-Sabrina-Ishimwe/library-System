const{booksDatabase}= require("../db/stock.js");

const add =(newBook)=>{
    newBook.id = booksDatabase.length + 1;
    booksDatabase.push(newBook);

    console.log("\nBook added\n");
    console.log(newBook);

};
   
const displayAll =() => {
console.log("\n All books in Database");
console.log(booksDatabase);
};

const update =(id,key,value) => {
    var exists = booksDatabase.find(ele=>ele.id === id);
    if(exists){
        exists[key] = value;
        console.log("\n Book updated\n");
        console.log(exists);
    }else{
        console.log("\n Book not found\n");
    }
};

const updateMany =(id,obj) => {
    var exists = booksDatabase.find(ele=>ele.id === id);
    if(exists){
        exists = Object.assign(exists,obj);
        console.log("\n Book updated\n");
        console.log(exists);
    }else{
        console.log("\n Book not found\n");
    }
}
 

const remove =(id,obj) =>{
    var exists = booksDatabase.find(ele=>ele.id === id);
    if(exists){
        exists = booksDatabase.filter(ele=>ele.id!== id);
        console.log("\n Book removed\n");
        console.log(exists);
    }else{
        console.log("\n Book not found\n");
    }
}

module.exports = {
    add,
    displayAll,
    update,
    updateMany,
    remove
}


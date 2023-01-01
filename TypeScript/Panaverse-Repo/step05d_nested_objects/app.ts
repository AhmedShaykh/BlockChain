type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook: Book = {
    author: {
        firstName: "Ahmed",
        lastName: "Shaykh"
    },
    name: "My Best Book"
}

console.log(myBook);
console.log(myBook.author);
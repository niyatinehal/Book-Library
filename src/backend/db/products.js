import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
      {
        _id: uuid(),
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 1149,  
        categoryName: 'Fiction',
        img:"https://m.media-amazon.com/images/I/41j-s9fHJcL.jpg"
    },
    {
        _id: uuid(),
        title: '1984',
        author: 'George Orwell',
        price: 949,  
        categoryName: 'Fiction',
        img:"https://m.media-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg"
    },
    {
        _id: uuid(),
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 799,  
        categoryName: 'Fiction',
        img:"https://m.media-amazon.com/images/I/41SQGZn9gBL._SX292_BO1,204,203,200_.jpg"
    },
    {
        _id: uuid(),
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: 699,  
        categoryName: 'Fiction',
        img:"https://m.media-amazon.com/images/I/51tJ9Ohxu7L._SX321_BO1,204,203,200_.jpg"
    },
    {
        _id: uuid(),
        title: 'To the Lighthouse',
        author: 'Virginia Woolf',
        price: 1249,  
        categoryName: 'Fiction',
        img:"https://m.media-amazon.com/images/I/517FCFS7WBL._SX331_BO1,204,203,200_.jpg"
    },
    {
        _id: uuid(),
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        price: 999,  
        categoryName: 'Fiction',
        img:"https://m.media-amazon.com/images/I/418bOQWiRBL._SX304_BO1,204,203,200_.jpg"
    },
    {
        _id: uuid(),
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 1399,  
        categoryName: 'Fantasy',
        img:"https://m.media-amazon.com/images/I/51rhKCx8EKL._SX326_BO1,204,203,200_.jpg"
    },
    {
        _id: uuid(),
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        price: 1699,  
        categoryName: 'Fantasy',
        img:"https://m.media-amazon.com/images/I/51SkIDTd9rL._SX323_BO1,204,203,200_.jpg"
    },
    {
        _id: uuid(),
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        price: 1999,  
        categoryName: 'Fantasy',
        img:"https://m.media-amazon.com/images/I/51P5WuNDb9L._SX324_BO1,204,203,200_.jpg"
    },
    {
        _id: uuid(),
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        price: 1299,  
        categoryName: 'Mystery',
        img:"https://m.media-amazon.com/images/I/51CLej1GJCL._SX312_BO1,204,203,200_.jpg"
    },
    {
        _id: uuid(),
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        price: 1099,  
        categoryName: 'Mystery',
        img:"https://m.media-amazon.com/images/I/41oHwrlMRKL._SX323_BO1,204,203,200_.jpg"
    },
    {
        _id: uuid(),
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stieg Larsson',
        price: 1499,  
        categoryName: 'Mystery',
        img:"https://m.media-amazon.com/images/I/41ChBObktZL._SX324_BO1,204,203,200_.jpg"
    }
];

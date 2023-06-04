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
        categoryName: 'Fiction'
    },
    {
        _id: uuid(),
        title: '1984',
        author: 'George Orwell',
        price: 949,  
        categoryName: 'Fiction'
    },
    {
        _id: uuid(),
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 799,  
        categoryName: 'Fiction'
    },
    {
        _id: uuid(),
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: 699,  
        categoryName: 'Fiction'
    },
    {
        _id: uuid(),
        title: 'To the Lighthouse',
        author: 'Virginia Woolf',
        price: 1249,  
        categoryName: 'Fiction'
    },
    {
        _id: uuid(),
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        price: 999,  
        categoryName: 'Fiction'
    },
    {
        _id: uuid(),
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 1399,  
        categoryName: 'Fantasy'
    },
    {
        _id: uuid(),
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        price: 1699,  
        categoryName: 'Fantasy'
    },
    {
        _id: uuid(),
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        price: 1999,  
        categoryName: 'Fantasy'
    },
    {
        _id: uuid(),
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        price: 1299,  
        categoryName: 'Mystery'
    },
    {
        _id: uuid(),
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        price: 1099,  
        categoryName: 'Mystery'
    },
    {
        _id: uuid(),
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stieg Larsson',
        price: 1499,  
        categoryName: 'Mystery'
    }
];

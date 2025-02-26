// Importing the React library, which is required for creating React components.
import React from 'react';

// Importing the array of book data from the 'books' file.
import { books } from './books';

// Importing the Book component, which will be used to render each book.
import Book from './Book';

// Defining the BookList component as a functional component.
const BookList = () => {
    return (
        // Using a section element to wrap the list of books and applying the 'booklist' CSS class for styling.
        <section className='booklist'>
            {/* Mapping over the array of books to dynamically create a list of Book components.
                Each book is passed as props using the spread operator (...book).
                The 'key' prop is used to uniquely identify each book in the list for React's rendering optimization. */}
            {books.map((book, index) => (
                <Book key={book.id} {...book} number={index}/>
            ))}
        </section>
    );
};

// Exporting the BookList component so it can be imported and used in other files.
export default BookList;

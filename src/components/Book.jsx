// Import the React library to use JSX and React components
import React from 'react';

// Define a functional component named "Book" that accepts "props" as its argument
// Props allow data to be passed into the component from its parent
const Book = (props) => {
    // Destructure the props object to extract the img, title, author, and number properties
    // Destructuring makes it easier to access these values without repeating "props."
    const { img, title, author, number } = props;

    // Log the "number" prop to the console for debugging purposes
    console.log(number);

    // Return the JSX structure for the Book component
    // JSX is a syntax extension that allows HTML-like code to be written in JavaScript
    return (
        <article className='book'> 
            {/* 
                A container element with the class 'book'.
                This is used for styling and grouping the book's content.
            */}
            
            <img src={img} alt={title} /> 
            {/* 
                Displays the book image.
                - "src" is the path to the image file.
                - "alt" provides alternative text for accessibility and when the image fails to load.
            */}

            <h2>{title}</h2> 
            {/* 
                Displays the book title.
                - The title is dynamically inserted using curly braces {}.
            */}

            <h4>{author}</h4> 
            {/* 
                Displays the book author.
                - The author's name is dynamically inserted using curly braces {}.
            */}

            <span className='number'>{`# ${number + 1}`}</span>
            {/* 
                Displays the project number.
                - The "number" prop is incremented by 1 to make it more user-friendly (e.g., starting from 1 instead of 0).
                - Template literals (backticks) are used to embed the dynamic value in a string.
            */}
        </article>
    );
};

// Export the Book component as the default export of this module
// This allows the component to be imported and used in other parts of the application
export default Book;
// Importing the React library to use JSX and build React components.
import React from 'react';

// Importing the BookList component, which will render the list of books.
import BookList from './components/BookList';

// The main App component, which serves as the root of the application.
function App() {
    return (
        <>
            {/* Displaying the main heading of the application */}
            <h1>Amazon best sellers</h1>

            {/* Rendering the BookList component to display the list of books */}
            <BookList />
        </>
    );
}

// Exporting the App component to be used in the application entry point (e.g., index.js).
export default App;

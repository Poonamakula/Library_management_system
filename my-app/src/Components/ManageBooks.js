import React, { useState } from 'react';
import AddBook from './AddBook';
import BookTable from './BookTable';

const ManageBooks = () => {
    const [books, setBooks] = useState([
        { id: 1, name: 'PHP And MySQL Programming', category: 'Technology', author: 'Anuj Kumar', isbn: '222333', price: 20.00 },
        { id: 2, name: 'Concepts of Physics', category: 'Science', author: 'HC Verma', isbn: '1111', price: 15.00 },
    ]);

    const handleAddBook = (book) => {
        setBooks([...books, { ...book, id: books.length + 1 }]);
    };

    return (
        <div className="manage-books">
            <h1>Manage Books</h1>
            <AddBook onAdd={handleAddBook} />
            <BookTable books={books} />
        </div>
    );
};

export default ManageBooks;

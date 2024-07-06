import React from 'react';
import BookRow from './Bookrow';
import "./Books.css";
const BookTable = ({ books, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Book Name</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <BookRow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    );
};

export default BookTable;


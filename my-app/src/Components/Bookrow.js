import React from 'react';
import "./Books.css";

const BookRow = ({ book, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{book.name}</td>
            <td>{book.category}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>{book.price}</td>
            <td>
                <div className='button-container'>
                <button onClick={() => onEdit(book)} className='Edit-button'>Edit</button>
                <button onClick={() => onDelete(book)} className='Delete-button'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default BookRow;

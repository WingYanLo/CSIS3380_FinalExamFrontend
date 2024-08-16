import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Book from './Book';

const ShowBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://csis-3380-final-exam-backend.vercel.app/api/v1/books')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  const deleteBook = (id) => {
    axios.delete(`https://csis-3380-final-exam-backend.vercel.app/api/v1/books/${id}`)
      .then(() => setBooks(books.filter(book => book._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="display-4">Books List</h2>
        </div>
        <div className="col-md-12 text-right mb-3">
          <Link to="/create" className="btn btn-info">+ Add New Book</Link>
        </div>
        <div className="col-md-12">
          <hr /> {/* Horizontal line added here */}
        </div>
      </div>
      <div className="row">
        {books.length ? books.map(book => (
          <div key={book._id} className="col-md-4">
            <Book book={book} deleteBook={deleteBook} />
          </div>
        )) : (
          <div className="col-md-12">
            <p>No books available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBooks;

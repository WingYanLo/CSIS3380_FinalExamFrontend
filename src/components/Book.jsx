import React from 'react';

const Book = ({ book, deleteBook }) => {
  return (
    <div
      className="card-container"
      style={{
        position: 'relative',
        marginBottom: '20px',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        border: '1px solid black', // Black outline like in the HTML
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
        className="img-fluid"
      />
      <div className="desc" style={{ padding: '10px' }}>
        {/* Book Title in Blue, with link styling */}
        <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>
          <a href={`/show-book/${book._id}`} style={{ color: 'blue', textDecoration: 'none' }}>
            {book.bookTitle}
          </a>
        </h2>
        {/* All text is the same size */}
        <h3 style={{ fontSize: '16px', color: '#6c757d' }}>{book.bookAuthor}</h3>
        <p style={{ fontSize: '16px' }}>{book.bookDescription}</p>
      </div>
      {/* Delete Button */}
      <button
        className="btn btn-secondary"
        onClick={() => deleteBook(book._id)}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          padding: '5px 10px',
          fontSize: '16px',
        }}
      >
        X
      </button>
    </div>
  );
};

export default Book;

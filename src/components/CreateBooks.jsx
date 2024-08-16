import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const CreateBook = () => {
  const [bookTitle, setTitle] = useState('');
  const [bookAuthor, setAuthor] = useState('');
  const [bookDescription, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://csis-3380-final-exam-backend.vercel.app/api/v1/books', { bookTitle, bookAuthor, bookDescription })
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <Link to="/" className="btn btn-info float-left mb-3">Show Book List</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Add Book</h1>
          <p className="lead text-center">Create new book</p>

          <form noValidate onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="form-control"
                value={bookTitle}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={bookAuthor}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Describe this book"
                name="description"
                className="form-control"
                value={bookDescription}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;

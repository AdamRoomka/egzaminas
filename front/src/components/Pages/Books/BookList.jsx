import React, {useEffect, useState} from 'react'
import { getAllBooks, getBookById } from '../../../api/lib/BooksApi'
import Book from './Book'

function BookList() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getAllBooks().then((res) => {
        const bookdata = res.data.data.books;
        setBooks(bookdata);
    });

    getBookById().then((res) => {
      const bookdata = res.data.data.books;
  });

}, []);

  return (
    <div className='container'>
      <div className="row">
        <h2>Chose yourf favourite books:</h2>
        {books.map((book) =>(
          <div key={book._id} className="col-3 book">
            <Book
              data={book}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList
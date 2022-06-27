import React, {useEffect, useState} from 'react'
import { getAllBooks } from '../../../api/lib/BooksApi'
import Book from './Book'

function BookList() {

  const [books, setBooks] = useState([])
  const [render, setRender] = useState(false)

  console.log(books)

  useEffect(() => {
    getAllBooks().then((res) => {
        const bookdata = res.data.data.books;
        setBooks(bookdata);
        console.log(bookdata)
    });

}, [render]);

  return (
    <div className='container'>
      <div className="row">
        <h2>Chose yourf favourite books:</h2>
        {books.map((book) =>(
          <div className="col-3 mx-2 book">
            <Book
              key={book._id}
              data={book}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList
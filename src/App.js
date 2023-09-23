
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"
import Navbar from './Components/Navbar';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response1 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
      const response2 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes');
      setBooks([...response1.data.items, ...response2.data.items]);
    };
    fetchBooks();
  }, []);


  return (
   <div>
    <Navbar setBooks={setBooks}/>
     <div className='app'>
      {
        books && books.map((book)=>(
          <div className='book-card'>
            <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
            <div>
            <h1>{book.volumeInfo.title}</h1>
            <h3>{book.volumeInfo.authors}</h3>
            <p>{book.volumeInfo.description}</p>
            </div>
          </div>
        ))
      }
    </div>
   </div>
  )
};

export default App;

import React, {useState} from 'react';
import books from './components/book';
import data from './models/books.json';

function App() {
  const [books] = useState (data);
 return books.map(books => <h1>books = {books.title} {books.subtitle} {books.description}</h1>)
}

 export default App;


import React from 'react';

const book = (props) => {
  return (
  <div> 
    <h2>{props.book.title.volumeinfo}</h2>
    <h3>{props.author}</h3>
    /*<h4>{props.thumbnailImage}</h4>*/
    <h5>{props.bookPrice}</h5>
    </div>
    );
  }

export default book;

import React from 'react';

const GadgetList = (props) => {

  return (
    <main>

      <h2>Headphones</h2>
      {props.items.map((item) => (
      <div>
        <h2>{item.title}</h2>
        <p>{item.price}</p>
        <img /> 
      </div>
      ))}
    </main>
  );
}

export default GadgetList;

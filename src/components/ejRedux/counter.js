import React from 'react';

const Counter = ({value, clickSumar, clickRestar}) => {
    return (
    <div>
      <h1>{value}</h1>
      <button onClick={clickSumar}>Sumar</button>
      <button onClick={clickRestar}>Restar</button>
    </div>
    )
  };

  export default Counter;
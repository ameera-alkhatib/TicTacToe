import React from 'react';

function Square({ onClick, value }) {
  return (
    <button className='Square' onClick={onClick}>
      {value}
    </button>
  );
}
export default Square;

import React from 'react';
import '../styles/Tictactoe.css';
const Tictactoe = () => {
  function Square({ value, onClick }) {
    return (
      <button ClassName='Square' onClick={onClick}>
        {value}
      </button>
    );
  }
  function Board() {
    const [squers, setSquers] = React.useState(Array(9).fill(null));
    const [isX, setIsX] = React.useState(true);
    const handleClick = (i) => {
      squers[i] = isX ? 'X' : 'O';
      setSquers(squers);
    };
    return (
      <div className='board'>
        <div className='board-row'>
          <Square value={'X'} />
          <Square value={'O'} />
          <Square value={'X'} />
        </div>

        <div className='board-row'>
          <Square value={'X'} />
          <Square value={'O'} />
          <Square value={'X'} />
        </div>

        <div className='board-row'>
          <Square value={'X'} />
          <Square value={'O'} />
          <Square value={'X'} />
        </div>
      </div>
    );
  }
  return <Board />;
};

export default Tictactoe;

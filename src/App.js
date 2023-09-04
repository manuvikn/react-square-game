import './App.css';
import { useState } from 'react';
import { Board } from './components/Board/Board';
import { Header } from './components/Header/Header';
import { ButtonsContainer } from './components/ButtonsContainer/ButtonsContainer';

function App() {

  const [ xTurn, setXTurn ] = useState(true);
  const [ turn, setTurn ] = useState(0);
  const [ winner, setWinner ] = useState('');
  const [ gameState, setGameState ] = useState(
    [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ]
  );
  const [ gameTurns, setGameTurns ] = useState([
    [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ]
  ]);

  const clickSquare = (row, col) => {

    if (gameState[row][col] != ' ' || winner != '') return;

    let currentGameTurn = [...gameState];
    currentGameTurn[row][col] = xTurn ? 'X' : 'O';

    setGameState(currentGameTurn);
    checkWinner();
    setTurn( turn + 1 );
    setGameTurns([...gameTurns.slice(0, (turn + 1)), [...gameState.map(row => [...row])]]);
    setXTurn( !xTurn );
  
  };

  const checkWinner = () => {

    const diagonalCell = gameState[1][1] != ' ' ? gameState[1][1] : false;
    const counterDiagonal = [0, 0];

    for (let i =0; i < gameState.length; i ++) {

      const counterRow = {X: 0, O: 0};
      const counterCol = {X: 0, O: 0};

      if (diagonalCell) {
        gameState[i][i] == diagonalCell && counterDiagonal[0] ++;
        gameState[i][(gameState[i].length - 1 - i)] == diagonalCell && counterDiagonal[1] ++; 
      }

      for (let j =0; j < gameState[i].length; j ++) {

        gameState[i][j] != ' ' && counterRow[gameState[i][j]] ++;
        gameState[j][i] != ' ' && counterCol[gameState[j][i]] ++;

      }

      const keys = Object.keys(counterRow);
      const length = keys.length;

      for (let k = 0; k < length; k ++) {

        if (counterRow[keys[k]] == 3 || counterCol[keys[k]] == 3) {

          setWinner(keys[k]);
          return;

        }

      }

    }
    if (counterDiagonal.some(diagonal => diagonal == 3)) {
      setWinner(diagonalCell);
      return;
    }

  };

  const onButtonTurn = (pressedTurn) => {

    setGameState( [...gameTurns[pressedTurn].map(row => [...row])] );
    setXTurn( pressedTurn % 2 == 0 ? true : false );
    setTurn(pressedTurn);

  };
 
  return (
    <>

      <Header xTurn={xTurn} winner={winner}/>
      <Board gameState={gameState} clickSquare={clickSquare}/>
      <ButtonsContainer gameTurns={gameTurns} onButtonTurn={onButtonTurn}/>

    </>
  );
};

export default App;

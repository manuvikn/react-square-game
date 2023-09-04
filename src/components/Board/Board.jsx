import { Square } from '../Square/Square';
import './Board.css';

export const Board = ({gameState, clickSquare}) => {

    return (
        <div className="board-container">

            {gameState.map((row, rowIdx) => {

                return (
                    <div key={rowIdx} className="board-row">{row.map((col, colIdx) => (<Square key={colIdx} row={rowIdx} col={colIdx} value={col} clickSquare={clickSquare}/>))}</div>
                );

            })}

        </div>
    )

}
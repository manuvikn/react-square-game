import './ButtonsContainer.css';

export const ButtonsContainer = ({gameTurns, onButtonTurn}) => {

    return (
        <div className='buttons-container'>
            {gameTurns.map((e, idx) => (<button key={idx} className="custom-button" onClick={() => onButtonTurn(idx)}>{idx == 0 ? 'Start the game' : `Turn ${idx}`}</button>))}
        </div>
    )

}
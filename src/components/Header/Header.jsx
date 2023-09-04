export const Header = ({xTurn, winner}) => {

    return (
        <div>
            <h1>Square Game</h1>
            <p style={ { 'textAlign': 'end' } }>
                {winner != '' ? `${winner} won!` : `${xTurn ? 'X' : 'O'} player turn`}
            </p>
        </div>
    )

}
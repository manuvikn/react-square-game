export const Square = ({ value, clickSquare, row, col }) => {

    const spanStyle = {

        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        border: 'solid black 2px'

    };

    return (
        <span onClick={() => clickSquare(row, col)} style={ spanStyle }>{value}</span>
    );

};
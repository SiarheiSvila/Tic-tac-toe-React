import React, {useState} from 'react';
import './Game.css'
import { calculateWinner } from '../helpers';
import Board from './Board'

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy =  [...board]
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
        
    }

    function startGame() {
        const message = winner ? "Play again" : "Restart Game";
        return(
        <button className="start-game-btn" onClick={() => setBoard(Array(9).fill(null))}>
            {message}
        </button>
        )
    }

    return (
        <div className="container">
            <div className="winner">
                <p>{winner ? 'Winnner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
            </div>
            <Board squares={board} onClick={handleClick} />
            {startGame()}
        </div>
    )
}

export default Game;
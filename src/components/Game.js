import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from './Board'

const styles = {
    width: '200px',
    margin: '20px auto'
}

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (i) => {
        const boardCopy = [...board]
        // if user click an occupied square or if game won, return
        if(winner || boardCopy[i]) return;
        // put x or 0 in clicked square
        boardCopy[i] = isNext ? 'X' : 'O'
        setBoard(boardCopy)
        setIsNext(!isNext)
    }

    const jumpTo = () => {

    }

    const renderMoves = () => ( <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <>
        <Board squares={board} onClick={handleClick}/>
        <div style={styles}>
            <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (isNext ? 'X' : 'O')}</p>
            {renderMoves()}
        </div>
        </>
    )
}


export default Game
import { useState } from 'react'
import './Game.css'
import Square from './Square'

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //colunas
        [0, 4, 8], [2, 4, 6] //diagonais
    ]

    for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Game() {
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);

    const [squares, setSquares] = useState(Array(9).fill(null));

    const [xIsNext, setXIsNext] = useState(true);
    let newRound = false;

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Vencedor ' + winner;
        newRound = true;
    } 
    else if (!squares.includes(null)) {
        status = 'Empate!'
        newRound = true;
    }
    else {
        status = "Próxima jogada: " + (xIsNext ? "X" : "O");
        newRound = false;
    }


    function handleSquareClick(i) {
        if (squares[i] || winner) return; //verifica se ja existe um elemento na posição i ou se existe vencedor
        const nextSquares = [...squares]
        nextSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(nextSquares);
        if (calculateWinner(nextSquares) === 'X') {
            setScoreX(scoreX + 1);
        }
        else if (calculateWinner(nextSquares) === 'O') {
            setScoreO(scoreO + 1);
        }
        setXIsNext(!xIsNext);
        console.log(nextSquares)
    }

    function resetGame(){
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

  return (
    <div className='game'>
        <h1 className="title">Jogo da Velha</h1>
        <div className="status">Placar X = {scoreX} | Placar O = {scoreO}</div>
        <div className={winner ? "status winner" : "status"}>{status}</div>
        <div className="board">
            <div className="row">{[0,1,2].map((i)=><Square value={squares[i]} onClick={()=>handleSquareClick(i)} key={i}/>)}</div>
            <div className="row">{[3,4,5].map((i)=><Square value={squares[i]} onClick={()=>handleSquareClick(i)} key={i}/>)}</div>
            <div className="row">{[6,7,8].map((i)=><Square value={squares[i]} onClick={()=>handleSquareClick(i)} key={i}/>)}</div>
        </div>
        {newRound && <button className='reset' onClick={resetGame}>
            Novo Jogo
        </button>}

    </div>
  )
}

export default Game
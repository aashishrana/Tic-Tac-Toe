import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";

function Grid({ numberOfCard }) {
  const [board, setBoard] = useState(Array(numberOfCard).fill(""));
  const [turn, setTurn] = useState(true); // true => 0, false => X
  const [winner, setWinner] = useState(null);
  function play(index) {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }

    const win = isWinner(board, turn ? "O" : "X");

    if (win) {
      setWinner(win);
    }

    setBoard([...board]);
    setTurn(!turn);
  }
  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="turn-highlight"> winner is {winner} </h1>
          <button className="reset">Reset Game </button>
        </>
      )}

      <h1 className="turn-highlight"> Current turn : {(turn ) ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((el, idx) => (
          <Card key={idx} onPlay={play} player={el} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Grid;

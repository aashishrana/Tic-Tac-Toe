import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";

function Grid({ numberOfCard }) {
  const [board, setBoard] = useState(Array(numberOfCard).fill(""));
  const [turn, setTurn] = useState(true);  // true => 0, false => X
  return (
    <div className="grid-wrapper">
      <h1 className="grid-highlight"> Current turn : {(turn ? "O" : "X")}</h1>
      <div className="grid">
        {board.map((el, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Grid;

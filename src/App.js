import React, { useEffect, useState } from "react";
import Square from "./components/Square.js";
import "./index.css";
const App = () => {
  // global states
  let [count, setCount] = useState(0);
  let [turn, setTurn] = useState("X's turn");
  let [GameOver, setGame] = useState(false);
  let [square, setSquare] = useState({
    1: " ",
    2: "  ",
    3: "   ",
    4: "    ",
    5: "     ",
    6: "      ",
    7: "       ",
    8: "        ",
    9: "         ",
  });
  // useEffect
  useEffect(() => {
    if (square[1] == square[2] && square[2] == square[3]) {
      setGame(true);
      winner();
    }
    if (square[4] == square[5] && square[5] == square[6]) {
      winner();
      setGame(true);
    }
    if (square[7] == square[8] && square[8] == square[9]) {
      winner();
      setGame(true);
    }
    if (square[1] == square[4] && square[4] == square[7]) {
      winner();
      setGame(true);
    }
    if (square[2] == square[5] && square[5] == square[8]) {
      winner();
      setGame(true);
    }
    if (square[3] == square[6] && square[6] == square[9]) {
      winner();
      setGame(true);
    }
    if (square[3] == square[6] && square[6] == square[9]) {
      winner();
      setGame(true);
    }
    if (square[3] == square[6] && square[6] == square[9]) {
      winner();
      setGame(true);
    }
    if (square[3] == square[6] && square[6] == square[9]) {
      winner();
      setGame(true);
    }
    if (square[1] == square[5] && square[5] == square[9]) {
      winner();
      setGame(true);
    }
    if (square[3] == square[5] && square[5] == square[7]) {
      winner();
      setGame(true);
    }
  }, [square]);
  // functions
  let winner = () => {
    if (count % 2 == 1) {
      setTurn("X has won");
    } else {
      setTurn("O has won");
    }
  };
  let checkTurn = () => {
    if (count % 2 == 0) {
      setTurn("O's turn");
    } else {
      setTurn("X's turn");
    }
  };
  let changeSquare = (_id) => {
    if (square[_id] != "X" && square[_id] != "O") {
      if (count % 2 == 0 && GameOver != true) {
        setSquare({ ...square, [_id]: "X" });
        checkTurn();
      } else if (count % 2 == 1 && GameOver != true) {
        setSquare({ ...square, [_id]: "O" });
        checkTurn();
      }
      setCount(count + 1);
    } else {
      console.log("This square has already been clicked");
    }
  };
  let reset = () => {
    setSquare({
      1: " ",
      2: "  ",
      3: "   ",
      4: "    ",
      5: "     ",
      6: "      ",
      7: "       ",
      8: "        ",
      9: "         ",
    });
    setCount(0);
    setTurn("X's turn");
    setGame(false);
  };
  return (
    <div className="bg-slate-800">
      <p className="flex justify-center items-center p-[3em] md:texl-xl text-2xl text-yellow-400 font-semibold">
        Tic Tac Toe
      </p>
      <div>
        <div className="grid grid-cols-3 mx-[20vw] lg:mx-[35vw] md:mx-[30vw] boxes">
          <Square
            changeSquare={() => {
              changeSquare(1);
            }}
            square={square[1]}
          />
          <Square
            changeSquare={() => {
              changeSquare(2);
            }}
            square={square[2]}
          />
          <Square
            changeSquare={() => {
              changeSquare(3);
            }}
            square={square[3]}
          />
          <Square
            changeSquare={() => {
              changeSquare(4);
            }}
            square={square[4]}
          />
          <Square
            changeSquare={() => {
              changeSquare(5);
            }}
            square={square[5]}
          />
          <Square
            changeSquare={() => {
              changeSquare(6);
            }}
            square={square[6]}
          />
          <Square
            changeSquare={() => {
              changeSquare(7);
            }}
            square={square[7]}
          />
          <Square
            changeSquare={() => {
              changeSquare(8);
            }}
            square={square[8]}
          />
          <Square
            changeSquare={() => {
              changeSquare(9);
            }}
            square={square[9]}
          />
        </div>
        <div className="flex justify-around mx-[20vw] lg:mx-[35vw] md:mx-[30vw] ">
          <p className="mt-[8px] text-xs md:text-base lg:text-l text-yellow-400 font-semibold">
            {turn}
          </p>
          <button
            onClick={reset}
            className="mt-[8px] text-xs md:text-base lg:text-l text-white font-semibold bg-yellow-400 rounded-xl max-h-[2em] min-w-[4em] "
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

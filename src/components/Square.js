import React, { useState } from "react";

const Square = (props) => {
  return (
    <button
      className="border border-yellow-400 border-4  m-[.5px] box lg:min-h-[10vw] md:min-h-[12vw] text-2xl text-white"
      onClick={props.changeSquare}
    >
      {props.square}
    </button>
  );
};

export default Square;

import React from "react";

const Controls = ({ onMove, onRotateLeft, onRotateRight }) => {
  return (
    <div className="controls">
      <button onClick={onRotateLeft}>Rotate Left</button>
      <button onClick={onMove}>Move Forward</button>
      <button onClick={onRotateRight}>Rotate Right</button>
    </div>
  );
};

export default Controls;

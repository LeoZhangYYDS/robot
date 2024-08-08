import React from "react";
import "../css/Grid.css";
const Grid = ({ robotPosition, robotDirection }) => {
  const renderCell = (row, col) => {
    const isRobotHere = robotPosition.x === col && robotPosition.y === row;
    return (
      <div className="grid-cell" key={`${row}-${col}`}>
        {isRobotHere && <div className={`robot ${robotDirection}`}></div>}
      </div>
    );
  };

  const gridRows = [];
  for (let row = 4; row >= 0; row--) {
    const rowCells = [];
    for (let col = 0; col < 5; col++) {
      rowCells.push(renderCell(row, col));
    }
    gridRows.push(
      <div className="grid-row" key={row}>
        {rowCells}
      </div>
    );
  }

  return <div className="grid">{gridRows}</div>;
};

export default Grid;

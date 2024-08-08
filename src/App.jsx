// src/App.js
import React, { useState } from "react";
import Grid from "./components/Grid";
import Controls from "./components/Controls";
import "./css/App.css";

const directions = ["North", "East", "South", "West"];

const App = () => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [robotDirection, setRobotDirection] = useState("North");

  const moveRobot = () => {
    const { x, y } = robotPosition;
    let newX = x;
    let newY = y;

    switch (robotDirection) {
      case "North":
        newY = Math.min(y + 1, 4);
        break;
      case "East":
        newX = Math.min(x + 1, 4);
        break;
      case "South":
        newY = Math.max(y - 1, 0);
        break;
      case "West":
        newX = Math.max(x - 1, 0);
        break;
      default:
        break;
    }

    setRobotPosition({ x: newX, y: newY });
  };

  const rotateRobot = (direction) => {
    const currentDirectionIndex = directions.indexOf(robotDirection);
    const newDirectionIndex =
      (currentDirectionIndex + direction + directions.length) %
      directions.length;
    setRobotDirection(directions[newDirectionIndex]);
  };

  return (
    <div className="app">
      <Grid robotPosition={robotPosition} robotDirection={robotDirection} />
      <Controls
        onMove={moveRobot}
        onRotateLeft={() => rotateRobot(-1)}
        onRotateRight={() => rotateRobot(1)}
      />
    </div>
  );
};

export default App;

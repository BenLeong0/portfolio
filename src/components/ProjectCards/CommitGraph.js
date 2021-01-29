import React from "react";

function CommitGraph(props) {
  const fill = "none";
  const stroke = "black";
  const strokeWidth = 2;

  const width = 370;
  const height = 240;
  const diff = width / props.graphPoints.length;
  const maxValue = props.graphPoints[props.graphPoints.length - 1];
  var i = -diff / 2;

  const points = props.graphPoints.map(x => [
    (i += diff),
    (height / maxValue) * (maxValue - x)
  ]);

  if (fill !== "none") {
    points.push([width - diff / 2, height]);
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <polyline
        points={points}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default CommitGraph;

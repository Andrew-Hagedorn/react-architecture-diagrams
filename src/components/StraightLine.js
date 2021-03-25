import React from "react";
import styled from "styled-components";
import {
  isStraightUp,
  isStraightDown,
  isStraightLeft,
  isStraightRight,
  isDownAndToTheLeft,
  isDownAndToTheRight,
  isUpAndToTheLeft,
  isUpAndToTheRight,
} from "../math/linkDirections";

const SVG = styled.svg`
  position: absolute;
  top: ${(p) => p.position.y}px;
  left: ${(p) => p.position.x}px;
  z-index: 0;
`;

export default function Link({
  counter = 1,
  start,
  end,
  color = "black",
  dashed,
  strokeWidth = 2,
}) {
  let maxWidth = Math.max(end.x, start.x) - Math.min(end.x, start.x);
  let maxHeight = Math.max(end.y, start.y) - Math.min(end.y, start.y);
  maxWidth = Math.max(maxWidth, 40);
  maxHeight = Math.max(maxHeight, 40);

  let position = {};
  let relativeStart = start;
  let relativeEnd = end;

  if (isStraightUp(start, end)) {
    position = {
      x: start.x - 12,
      y: end.y,
    };
    maxWidth = 40;
    relativeStart = {
      x: 15,
      y: start.y,
    };
    relativeEnd = {
      x: 15,
      y: 15,
    };
  } else if (isStraightDown(start, end)) {
    position = {
      x: start.x - 13,
      y: start.y,
    };
    maxWidth = 20;
    relativeStart = {
      x: 15,
      y: 0,
    };
    relativeEnd = {
      x: 15,
      y: end.y - start.y - 10,
    };
  } else if (isStraightLeft(start, end)) {
    position = {
      x: end.x,
      y: start.y - 10,
    };
    maxHeight = 20;
    relativeStart = {
      x: start.x - end.x,
      y: 12,
    };
    relativeEnd = {
      x: 10,
      y: 12,
    };
  } else if (isStraightRight(start, end)) {
    position = {
      x: start.x,
      y: end.y - 9,
    };
    maxHeight = 20;
    relativeStart = {
      x: 0,
      y: 10,
    };
    relativeEnd = {
      x: end.x - start.x - 10,
      y: 10,
    };
  } else if (isUpAndToTheRight(start, end)) {
    position = {
      x: start.x,
      y: end.y,
    };
    relativeStart = {
      x: 0,
      y: start.y - end.y,
    };
    relativeEnd = {
      x: end.x - start.x - 6,
      y: 10,
    };
  } else if (isUpAndToTheLeft(start, end)) {
    position = {
      x: end.x,
      y: end.y,
    };
    relativeStart = {
      x: start.x - end.x,
      y: start.y - end.y,
    };
    relativeEnd = {
      x: 5,
      y: 10,
    };
  } else if (isDownAndToTheRight(start, end)) {
    position = start;
    relativeStart = {
      x: 0,
      y: 0,
    };
    relativeEnd = {
      x: end.x - start.x - 8,
      y: end.y - start.y - 8,
    };
  } else if (isDownAndToTheLeft(start, end)) {
    position = {
      x: end.x,
      y: start.y,
    };
    maxWidth = maxWidth;
    relativeStart = {
      x: start.x - end.x,
      y: 0,
    };
    relativeEnd = {
      x: 6,
      y: end.y - start.y - 10,
    };
  } else {
    throw new Error("Unknown format...");
  }

  return (
    <SVG
      position={position}
      width={Math.max(maxWidth)}
      height={Math.max(maxHeight, 20)}
      dangerouslySetInnerHTML={{
        __html: `<defs>
        <marker
          id="arrow${counter}"
          markerWidth="11"
          markerHeight="11"
          refx="2"
          refy="6"
          orient="auto"
        >
          <path d="M2,2 L2,9 L7,6 L2,3" style="fill:${color};" />
        </marker>
      </defs>

      <line 
        style="marker-end: url(#arrow${counter})";
        x1="${relativeStart.x}" 
        y1="${relativeStart.y}" 
        x2="${relativeEnd.x}" 
        y2="${relativeEnd.y}" 
        stroke-width="${strokeWidth}" 
        ${dashed > 0 ? `stroke-dasharray="${dashed}"` : ""}
        stroke="${color}"
      />

      `,
      }}
    ></SVG>
  );
}

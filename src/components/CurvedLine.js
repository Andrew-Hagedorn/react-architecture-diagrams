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
import StraightLine from "./StraightLine";

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
  under = false,
}) {
  let maxWidth = Math.max(end.x, start.x) - Math.min(end.x, start.x);
  let maxHeight = Math.max(end.y, start.y) - Math.min(end.y, start.y);
  maxWidth = Math.max(maxWidth, 40);
  maxHeight = Math.max(maxHeight, 40);

  let position = {};
  let relativeStart = start;
  let relativeEnd = end;
  let relativeMiddle = end;

  if (
    isStraightUp(start, end) ||
    isStraightDown(start, end) ||
    isStraightLeft(start, end) ||
    isStraightRight(start, end)
  ) {
    return (
      <StraightLine
        counter={counter}
        start={start}
        end={end}
        color={color}
        dashed={dashed}
        strokeWidth={strokeWidth}
      />
    );
  } else if (isUpAndToTheRight(start, end)) {
    position = {
      x: start.x,
      y: end.y,
    };
    relativeStart = {
      x: 0,
      y: start.y - end.y,
    };

    if (under) {
      relativeStart.x = relativeStart.x + 5;
      relativeMiddle = {
        x: ((end.x - start.x) / 8) * 7,
        y: ((start.y - end.y) / 8) * 2,
      };
      relativeEnd = { x: end.x - start.x - 5, y: 15 };
    } else {
      relativeStart.x = relativeStart.x + 2;
      relativeMiddle = {
        x: ((end.x - start.x) / 4) * 1,
        y: ((start.y - end.y) / 8) * 1,
      };
      relativeEnd = {
        x: end.x - start.x - 10,
        y: 10,
      };
    }
  } else if (isUpAndToTheLeft(start, end)) {
    position = {
      x: end.x + 1,
      y: end.y,
    };
    relativeStart = {
      x: start.x - end.x,
      y: start.y - end.y,
    };
    if (under) {
      relativeMiddle = {
        x: 0,
        y: ((start.y - end.y) / 6) * 3,
      };
      relativeEnd = {
        x: 5,
        y: 14,
      };
    } else {
      relativeMiddle = {
        x: ((start.x - end.x) / 4) * 3,
        y: ((start.y - end.y) / 8) * 1,
      };
      relativeEnd = {
        x: 12,
        y: 12,
      };
    }
  } else if (isDownAndToTheRight(start, end)) {
    position = start;
    relativeStart = {
      x: 2,
      y: 2,
    };
    if (under) {
      relativeMiddle = {
        x: 0,
        y: ((end.y - start.y) / 5) * 3,
      };
      relativeEnd = {
        x: end.x - start.x - 8,
        y: end.y - start.y - 5,
      };
    } else {
      relativeEnd = {
        x: end.x - start.x - 4,
        y: end.y - start.y - 10,
      };
      relativeMiddle = {
        x: ((end.x - start.x) / 5) * 3,
        y: 0,
      };
    }
  } else if (isDownAndToTheLeft(start, end)) {
    maxWidth += 15;
    position = {
      x: end.x - 5,
      y: start.y,
    };
    maxWidth = maxWidth;

    if (under) {
      relativeStart = {
        x: start.x - end.x + 7,
        y: 3,
      };
      relativeEnd = {
        x: 10,
        y: end.y - start.y - 10,
      };
      relativeMiddle = {
        x: (end.x + 5) / 2,
        y: ((end.y - start.y) / 8) * 2,
      };
    } else {
      relativeStart = {
        x: start.x - end.x + 5,
        y: 2,
      };
      relativeEnd = {
        x: 6,
        y: end.y - start.y - 10,
      };
      relativeMiddle = {
        x: (end.x - start.x) / 8,
        y: 0,
      };
    }
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

      <path d="M${relativeStart.x},${relativeStart.y} Q${relativeMiddle.x},${
          relativeMiddle.y
        }  ${relativeEnd.x},${relativeEnd.y}"
            fill="none" 
            stroke="${color}" 
            style="marker-end: url(#arrow${counter})";
            ${dashed > 0 ? `stroke-dasharray="${dashed}"` : ""}
            stroke-width="${strokeWidth}"  
      />
      `,
      }}
    ></SVG>
  );
}

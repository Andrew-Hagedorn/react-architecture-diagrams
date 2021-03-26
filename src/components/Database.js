import React from "react";
import styled from "styled-components";
import { LinkPosition } from "../constants";

const defaultHeight = 62;
const defaultWidth = 82;

const Wrapper = styled.div`
  border: 2px solid black;
  background-color: white;
  width: ${(p) => p.width || defaultWidth - 2}px;
  height: ${(p) => p.height || defaultHeight - 2}px;
  position: absolute;
  top: ${(p) => p.position.y}px;
  left: ${(p) => p.position.x}px;
  display: flex;
  border-radius: 0px 0px 5px 5px;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 0px;
  border-bottom 0px;
  background-color: ${(p) => p.color || "#c6c2fc"};
`;

const Name = styled.div`
  margin: auto auto;
  height: 30px;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  width: 100%;
  padding: 15px;
`;

const CircleTop = styled.div`
  display: block;
  background-color: ${(p) => p.color || "#c6c2fc"};
  width: ${(p) => p.width || defaultWidth - 2}px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: -2px;
  border: 2px solid black;
`;

const CircleBottom = styled.div`
  display: block;
  background-color: ${(p) => p.color || "#c6c2fc"};
  width: ${(p) => p.width || defaultWidth - 2}px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  bottom: -5px;
  left: 0;
  border-bottom: 2px solid black;
`;

function Database({ name, position, color, height, width }) {
  return (
    <Wrapper color={color} position={position} height={height} width={width}>
      <CircleTop color={color} width={width} />
      <Name>{name}</Name>
      <CircleBottom color={color} width={width} />
    </Wrapper>
  );
}

Database.computePlacement = function ({ service, placement }) {
  const { position, height, width } = service;
  const componentHeight = height || defaultHeight;
  const componentWidth = width || defaultWidth;

  switch (placement) {
    case LinkPosition.Left:
      return {
        x: position.x,
        y: position.y + componentHeight / 2,
      };
    case LinkPosition.Bottom:
      return {
        x: position.x + componentWidth / 2,
        y: position.y + componentHeight,
      };
    case LinkPosition.Top:
      return {
        x: position.x + componentWidth / 2,
        y: position.y - 8,
      };
    case LinkPosition.Right:
      return {
        x: position.x + componentWidth,
        y: position.y + componentHeight / 2,
      };
  }
};

Database.getHeightAndWidth = function ({ height, width }) {
  return {
    width: width || defaultWidth,
    height: height || defaultHeight,
  };
};

export default Database;

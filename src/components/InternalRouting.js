import React from "react";
import styled from "styled-components";
import { LinkPosition } from "../constants";

const defaultHeight = 302;
const defaultWidth = 47;

const Wrapper = styled.div`
  border: 2px solid black;
  background-color: white;
  width: ${(p) => p.width || defaultWidth - 2}px;
  height: ${(p) => p.height || defaultHeight - 2}px;
  position: absolute;
  top: ${(p) => p.position.y}px;
  left: ${(p) => p.position.x}px;
  border-radius: 6px;
  background-color: ${(p) => p.color || "#cce6ff"};
`;

const Name = styled.div`
  writing-mode: vertical-lr;
  margin: auto auto;
  text-align: center;
  height: 100%;
  font-size: 14px;
`;

function InternalRouting({ name, position, color, height, width }) {
  return (
    <Wrapper position={position} color={color} height={height} width={width}>
      <Name>{name}</Name>
    </Wrapper>
  );
}

InternalRouting.computePlacement = function ({ service, placement }) {
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
        y: position.y,
      };
    case LinkPosition.Right:
      return {
        x: position.x + componentWidth,
        y: position.y + (service.height || 300) / 2,
      };
  }
};

InternalRouting.getHeightAndWidth = function ({ height, width }) {
  return {
    width: width || defaultWidth,
    height: height || defaultHeight,
  };
};

export default InternalRouting;

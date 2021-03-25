import React from "react";
import styled from "styled-components";
import { LinkPosition } from "../constants";

const defaultHeight = 62;
const defaultWidth = 152;

const Wrapper = styled.div`
  border: 2px solid black;
  background-color: white;
  width: ${(p) => p.width || defaultWidth - 2}px;
  height: ${(p) => p.height || defaultHeight - 2}px;
  position: absolute;
  top: ${(p) => p.position.y}px;
  left: ${(p) => p.position.x}px;
  border-radius: 6px 0 0 6px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const Name = styled.div`
  margin: auto auto;
  height: 40px;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  width: 80%;
  padding: 10px;
  background-color: ${(p) => p.color || "#e6ffcc"};
`;

const LoadBalancer = styled.div`
  display: inline-block;
  width: 15%;
  height: 100%;
  border-right: 2px solid black;
`;

function Service({ name, position, color, height, width }) {
  return (
    <Wrapper position={position} height={height} width={width}>
      <LoadBalancer></LoadBalancer>
      <Name color={color}>{name}</Name>
    </Wrapper>
  );
}

Service.computePlacement = function ({ service, placement }) {
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
        y: position.y + componentHeight / 2,
      };
  }
};

export default Service;

import React from "react";
import styled from "styled-components";
import StraightLine from "../components/StraightLine";
import RenderFullScreen from "./render";

export default {
  title: "Diagram/Components/StraightLine",
  component: StraightLine,
};

const Wrapper = styled.div`
  postition: relative;
  height: 500px;
  width: 500px;
  border: 1px solid black;
`;

const Point1 = styled.div`
  background-color: red;
  border-radius: 20px;
  position: absolute;
  top: ${(p) => p.y}px;
  left ${(p) => p.x}px;
  height: 5px;
  width: 5px;
`;

const Point2 = styled(Point1)`
  background-color: blue;
  top: ${(p) => p.y}px;
  left ${(p) => p.x}px;
`;

function Render(args) {
  return (
    <RenderFullScreen>
      <Wrapper>
        <Point1 {...args.start} />
        <Point2 {...args.end} />
        <StraightLine {...args} />
      </Wrapper>
    </RenderFullScreen>
  );
}

export const isDownAndToTheRight = () => (
  <Render counter={1} start={{ x: 40, y: 40 }} end={{ x: 300, y: 300 }} />
);

export const isDownAndToTheLeft = () => (
  <Render counter={2} start={{ x: 100, y: 30 }} end={{ x: 50, y: 300 }} />
);

export const isUpAndToTheRight = () => (
  <Render counter={2} start={{ x: 40, y: 200 }} end={{ x: 100, y: 20 }} />
);

export const isUpAndToTheLeft = () => (
  <Render counter={2} start={{ x: 100, y: 300 }} end={{ x: 50, y: 20 }} />
);

export const isStraightUp = () => (
  <Render counter={2} start={{ x: 100, y: 150 }} end={{ x: 100, y: 50 }} />
);

export const isStraightDown = () => (
  <Render counter={2} start={{ x: 100, y: 50 }} end={{ x: 100, y: 150 }} />
);

export const isStraightLeft = () => (
  <Render counter={2} start={{ x: 150, y: 50 }} end={{ x: 50, y: 50 }} />
);

export const isStraightRight = () => (
  <Render counter={2} start={{ x: 50, y: 50 }} end={{ x: 150, y: 50 }} />
);

import React from "react";
import styled from "styled-components";
import CurvedLine from "../components/CurvedLine";
import RenderFullScreen from "./render";

export default {
  title: "Diagram/Components/CurvedLine",
  component: CurvedLine,
};

const Wrapper = styled.div`
  postition: relative;
  height: 500px;
  width: 500px;
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
        <CurvedLine {...args} />
      </Wrapper>
    </RenderFullScreen>
  );
}

export const isDownAndToTheRight = () => (
  <>
    <Render counter={1} start={{ x: 40, y: 40 }} end={{ x: 300, y: 300 }} />
    <Render
      counter={1}
      start={{ x: 40, y: 80 }}
      end={{ x: 300, y: 380 }}
      under
    />
  </>
);

export const isDownAndToTheLeft = () => (
  <>
    <Render counter={2} start={{ x: 100, y: 30 }} end={{ x: 50, y: 300 }} />
    <Render
      counter={2}
      start={{ x: 200, y: 130 }}
      end={{ x: 150, y: 400 }}
      under
    />
  </>
);

export const isUpAndToTheRight = () => (
  <>
    <Render counter={2} start={{ x: 40, y: 200 }} end={{ x: 100, y: 20 }} />
    <Render
      counter={2}
      start={{ x: 140, y: 300 }}
      end={{ x: 200, y: 120 }}
      under
    />
  </>
);

export const isUpAndToTheLeft = () => (
  <>
    <Render counter={2} start={{ x: 100, y: 300 }} end={{ x: 50, y: 50 }} />
    <Render
      counter={2}
      start={{ x: 200, y: 300 }}
      end={{ x: 150, y: 50 }}
      under
    />
  </>
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

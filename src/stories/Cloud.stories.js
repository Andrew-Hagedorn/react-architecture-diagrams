import React from "react";
import styled from "styled-components";
import Cloud from "../components/Cloud";
import RenderFullScreen from "./render";

export default {
  title: "Diagram/Components/Cloud",
  component: Cloud,
};

const Wrapper = styled.div`
  postition: relative;
  height: 100%;
  width: 100%;
`;

function Render(args) {
  return (
    <RenderFullScreen>
      <Wrapper>
        <Cloud {...args} />
      </Wrapper>
    </RenderFullScreen>
  );
}

export const defaultSize = () => (
  <Render name1="cloud data" position={{ x: 100, y: 200 }} />
);

export const multipleLines = () => (
  <Render
    name1="complicated sub"
    name2="system"
    position={{ x: 100, y: 200 }}
  />
);

export const big = () => (
  <Render
    name1="elastic search"
    width={400}
    height={400}
    position={{ x: 100, y: 100 }}
  />
);

export const withcolor = () => (
  <Render color="green" name1="sql" position={{ x: 300, y: 300 }} />
);

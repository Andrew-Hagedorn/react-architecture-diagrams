import React from "react";
import styled from "styled-components";
import Database from "../components/Database";
import RenderFullScreen from "./render";

export default {
  title: "Diagram/Components/Database",
  component: Database,
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
        <Database {...args} />
      </Wrapper>
    </RenderFullScreen>
  );
}

export const narrow = () => (
  <Render name="redis" position={{ x: 100, y: 200 }} />
);

export const wide = () => (
  <Render name="elastic search" width={100} position={{ x: 300, y: 300 }} />
);

export const withcolor = () => (
  <Render color="green" name="sql" position={{ x: 300, y: 300 }} />
);

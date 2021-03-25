import React from "react";
import styled from "styled-components";
import InternalRouting from "../components/InternalRouting";
import RenderFullScreen from "./render";

export default {
  title: "Diagram/Components/InternalRouting",
  component: InternalRouting,
};

const Wrapper = styled.div`
  postition: relative;
  height: 100%;
  width: 100%;
`;

function Render({ name, position }) {
  return (
    <RenderFullScreen>
      <Wrapper>
        <InternalRouting name={name} position={position} />
      </Wrapper>
    </RenderFullScreen>
  );
}

export const api = () => (
  <Render name="API nginx routing" position={{ x: 100, y: 200 }} />
);

export const www = () => (
  <Render name="WWW nginx routing" position={{ x: 300, y: 300 }} />
);

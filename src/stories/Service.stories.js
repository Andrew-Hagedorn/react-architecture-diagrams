import React from "react";
import styled from "styled-components";
import Service from "../components/Service";
import RenderFullScreen from "./render";

export default {
  title: "Diagram/Components/Service",
  component: Service,
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
        <Service {...args} />
      </Wrapper>
    </RenderFullScreen>
  );
}

export const search = () => (
  <Render name="search service" position={{ x: 100, y: 200 }} />
);

export const geolocation = () => (
  <Render name="geolocation service" position={{ x: 300, y: 300 }} />
);

export const red = () => (
  <Render
    color="red"
    name="geolocation service"
    position={{ x: 300, y: 300 }}
  />
);

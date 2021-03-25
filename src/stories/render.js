import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Render({ children }) {
  return <Wrapper id="wrapper">{children}</Wrapper>;
}

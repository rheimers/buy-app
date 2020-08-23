import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function StyledHeader({ children }) {
  return <Header>{children}</Header>;
}

export default StyledHeader;

import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  color: black;
  display: flex;
`;

function StyledHeader({ children }) {
  return <Header>{children}</Header>;
}

export default StyledHeader;

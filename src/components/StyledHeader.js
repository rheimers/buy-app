import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function StyledHeader({ children }) {
  return <Header>{children}</Header>;
}

export default StyledHeader;

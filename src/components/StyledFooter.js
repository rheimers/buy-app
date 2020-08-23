import React from "react";
import styled from "@emotion/styled";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 50px;
  right: 0;
`;

function StyledFooter({ children }) {
  return <Footer>{children}</Footer>;
}

export default StyledFooter;

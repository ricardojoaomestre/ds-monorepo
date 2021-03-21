import React from "react";
import styled from "@emotion/styled";

const _ButtonBase = styled.button`
  padding: 16px 8px;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, ...rest }) => (
  <_ButtonBase {...rest}>{children}</_ButtonBase>
);

export default Button;

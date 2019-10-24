import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 15px;
  color: white;
  padding: 10px 20px;
  background-color: #5c31a3;
  border: 1px solid white;
  border-radius: 3px;
  cursor: pointer
`;

interface Props {
  text: string;
  onClick: () => void;
}

export default (props: Props) => <Button onClick={props.onClick}>{props.text}</Button>;

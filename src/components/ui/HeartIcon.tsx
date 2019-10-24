import * as React from "react";
import styled from "styled-components";
const FaHeart = require("react-icons/lib/fa/heart");

interface HeartIcon {
  isFavorite: boolean;
}

const IconWrapper = styled.span`
  position: absolute;
  z-index: 999;
  top: 0px;
  left: 0px;
  margin: 20px;
  font-size: 16px;
  color: ${(props: HeartIcon) => (props.isFavorite ? 'red' : 'grey')}
`;

export default ({ isFavorite }: HeartIcon) => <IconWrapper isFavorite={isFavorite}><FaHeart /></IconWrapper>;

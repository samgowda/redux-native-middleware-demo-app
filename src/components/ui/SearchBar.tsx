import * as React from "react";
import styled from "styled-components";

interface Props {
  searchQuery: any;
}

const SearchInput = styled.input`
  width: 50%;
  font-size: 1.5em;
  color: #5c31a3;
`;

export default (props: Props) => {
  return <SearchInput type="text" innerRef={props.searchQuery as any} />;
};

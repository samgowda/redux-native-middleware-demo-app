import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchGifs } from "../redux/actions/gifs";
import ResultsContainer from "./ResultsContainer";
import SearchBar from "./ui/SearchBar";
const FaSearch = require("react-icons/lib/fa/search");

interface State {
  searchQuery: string;
}

interface Props {
  fetchGifs: (searchQuery: string, offset?: number) => void;
}

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  background-color: #5c31a3;
`;

export const SearchButton = styled.button`
  width: 50px;
  font-size: 25px;
  background-color: #5c31a3;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export class SearchPage extends React.Component<Props, State> {
  public searchInput: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.searchInput.focus();
  }
  handleSubmit(event: any) {
    event.preventDefault();
    this.props.fetchGifs(this.searchInput.value);
    this.setState({ searchQuery: this.searchInput.value });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <SearchContainer onSubmit={this.handleSubmit}>
          <SearchBar searchQuery={(input: any) => (this.searchInput = input)} />
          <SearchButton type="submit">
            <FaSearch />
          </SearchButton>
        </SearchContainer>
        <ResultsContainer searchQuery={searchQuery} />
      </div>
    );
  }
}

export default connect<Props>(null, { fetchGifs })(SearchPage);

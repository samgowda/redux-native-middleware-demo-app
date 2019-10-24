import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchGifs, toggleToMyFavorites } from "../redux/actions/gifs";
import { Gif } from "../redux/reducers/gifs";
import Button from "./ui/Button";
import GifBox from "./ui/GifBox";


const Container = styled.section`
  /* Prevent vertical gaps */
  line-height: 0;

  -webkit-column-count: 5;
  -webkit-column-gap: 0px;
  -moz-column-count: 5;
  -moz-column-gap: 0px;
  column-count: 5;
  column-gap: 0px;

  @media (max-width: 1200px) {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
  @media (max-width: 1000px) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
  @media (max-width: 800px) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
  @media (max-width: 400px) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 20px 0px;
  background-color: #5c31a3;
`;

interface PassProps {
  searchQuery?: string;
}

interface DispatchProps {
  fetchGifs: (searchQuery: string, searchOffset: number) => void;
  toggleToMyFavorites: (id: string) => void;
}

interface StateProps {
  gifs: Gif[];
  searchOffset: number;
  loader?: boolean;
}

type Props = PassProps & DispatchProps & StateProps;

class ResultsContainer extends React.PureComponent<Props, null> {

  public handleButtonClick() {
    const { fetchGifs, searchQuery, searchOffset } = this.props;
    fetchGifs(searchQuery, searchOffset + 25);
  };

  public render() {
    const { gifs, loader } = this.props;
    return (
      <div>
        <Container>
          {gifs.map((gif: any) => (
            <GifBox id={gif.id} key={gif.id} isFavorite={gif.isFavorite} />
          ))}
        </Container>
        {gifs.length ? 
          <Footer>
            <Button
              text={loader ? 'LOADING MORE GIFS...' : 'MORE GIFS'}
              onClick={this.handleButtonClick.bind(this)}
            />
          </Footer> : null}
      </div>
    );
  }
}

const mapStateToProps = ({ gifs, ui }: any) => {
  return {
    gifs: gifs.gifSearch,
    searchOffset: gifs.searchOffset,
    loader: ui.loader
  };
};

export default connect(mapStateToProps, { fetchGifs, toggleToMyFavorites })(ResultsContainer);

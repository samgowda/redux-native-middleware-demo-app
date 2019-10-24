import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleToMyFavorites } from "../../redux/actions/gifs";
import HeartIcon from "./HeartIcon";

interface PassProps {
  id: string;
  isFavorite?: boolean;
}

interface DispatchProps {
  toggleToMyFavorites: (e: {}, isFavorite: boolean) => void;
}

type Props = PassProps & DispatchProps;

const ImageWrapper = styled.div`
  position: relative;
  padding: 5px;
`;

const Image = styled.img`
  width: 300px !important;
  height: auto !important;
  cursor: pointer;
`;

const GifBox = ({ id, isFavorite, toggleToMyFavorites }: Props): JSX.Element => {
  return (
    <ImageWrapper>
      <Image
        id={id}
        onClick={e => toggleToMyFavorites(e.currentTarget.id, isFavorite)}
        src={`https://i.giphy.com/media/${id}/giphy.webp`}
      />
      <HeartIcon isFavorite={isFavorite} />
    </ImageWrapper>
  );
};

export default connect<null, DispatchProps, PassProps>(null, { toggleToMyFavorites })(GifBox);

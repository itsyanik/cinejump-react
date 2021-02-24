import styled from "styled-components";

const FavoritesStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding-left: 8px;
  padding-right: 8px;
  overflow-x: scroll;

  p {
    font-weight: 300;
    size: 24px;
    line-height: 27.58px;
    color: #e83f5b;
    margin: 15px 0;
  }

  .favoritesContainer {
    display: flex;

    div {
      flex: none;
    }
  }
`;

export default FavoritesStyles;

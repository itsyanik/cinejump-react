import styled from "styled-components";

const SpotlightStyles = styled.div`
  overflow-x: scroll;
  display: flex;

  .movie {
    position: relative;
    width: 95%;
    margin-right: 5px;

    img {
      width: 95vw;
      border-radius: 10px;
    }

    .about {
      position: absolute;
      width: 100%;
      bottom: 5px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #efefef;
      padding: 8px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

      .title {
        font-weight: 400;
        size: 24px;
        display: block;
      }

      .overview {
        padding-top: 8px;
        font-weight: 300;
        size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
`;

export default SpotlightStyles;

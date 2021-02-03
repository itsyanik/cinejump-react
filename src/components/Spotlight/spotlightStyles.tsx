import styled from "styled-components";

const SpotlightStyles = styled.div`
  overflow-x: scroll;
  position: relative;
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

  @media only screen and (min-width: 720px) {
    display: grid;
    grid-template-areas:
      "spotlight spotlight top"
      "spotlight spotlight bottom";
    column-gap: 16px;
    row-gap: 16px;
    overflow: hidden;

    .movie {
      width: 100%;

      &#spotlight {
        grid-area: spotlight;

        .about {
          bottom: 7px;
        }

        img {
          height: 98%;
        }
      }

      img {
        width: 100%;
      }
    }
  }
`;

export default SpotlightStyles;

import styled from "styled-components";

const StyledTrailers = styled.div`
  margin-top: 15px;
  background-color: #80bcb8;
  width: 100vw;
  color: #f9f9f9;

  .trailersContainer {
    max-width: 1280px;
    width: 100%;
    margin: auto;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      width: 5px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #80bcb8;
    }

    ::-webkit-scrollbar-thumb {
      background: #e83f5b;
      border-radius: 5px;
    }

    p {
      font-weight: 300;
      size: 24px;
      line-height: 27.58px;
      margin: 15px 0;
    }

    .trailersWrapper {
      display: flex;

      .trailer {
        width: fit-content;
        display: flex;
        flex-direction: column;

        iframe {
          margin-right: 16px;
          min-width: 400px;
          min-height: 225px;
          border-radius: 10px;

          @media only screen and (min-device-width: 320px) {
            min-width: 320px;
          }
        }

        span {
          margin-top: 8px;
          font-weight: 300;
          font-size: 18px;
          line-height: 21px;
        }
      }
    }
  }
`;

export default StyledTrailers;

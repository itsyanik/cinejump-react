import styled from "styled-components";

const StyledTrailers = styled.div`
  margin-top: 15px;

  .bgContainer {
    display: flex;
    flex-direction: column;
    background-color: #80bcb8;
    color: #f9f9f9;
    min-height: 15px;
    width: 100vw;
    overflow: visible;

    .trailersContainer {
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
        font-size: 24px;
        line-height: 28px;
        margin: 16px 0;
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
  }
`;

export default StyledTrailers;

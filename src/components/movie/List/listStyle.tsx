import styled from "styled-components";

const ListStyles = styled.div`
  width: 100%;

  .listContainer {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1280px;
    padding-left: 8px;
    padding-right: 8px;

    p {
      font-weight: 300;
      size: 24px;
      line-height: 27.58px;
      color: #e83f5b;
      margin: 15px 0;
    }

    .movieContainer {
      display: flex;
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

      div {
        flex: none;
      }
    }
  }
`;

export default ListStyles;

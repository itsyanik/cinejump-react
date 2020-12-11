import styled from "styled-components";

const ListStyles = styled.div`
  overflow-x: scroll;
  display: flex;
  flex-direction: column;

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
    color: #e83f5b;
    margin: 15px 0;
  }

  div {
    display: flex;

    div {
      flex: none;
    }
  }
`;

export default ListStyles;

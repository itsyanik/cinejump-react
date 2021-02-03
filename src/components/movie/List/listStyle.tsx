import styled from "styled-components";

const ListStyles = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

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

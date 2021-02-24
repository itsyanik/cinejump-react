import styled from "styled-components";

const HeaderStyles = styled.header`
  width: 100%;
  color: #efefef;
  font-size: 20px;
  font-weight: 300;
  background-color: #e83f5b;

  .headerContainer {
    padding: 8px;
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }

  .left {
    display: flex;

    span {
      display: block;
      width: 83px;
      line-height: 23px;
    }
  }

  .center {
    height: 39px;
    display: none;
  }

  @media only screen and (min-width: 500px) {
    .center {
      display: block;
    }
  }
`;

export default HeaderStyles;

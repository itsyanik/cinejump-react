import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #e83f5b;
  color: #efefef;
  padding-bottom: 30px;
  padding-top: 30px;
  font-size: 20px;
  font-weight: 300;

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

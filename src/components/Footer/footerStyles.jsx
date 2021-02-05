import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #e83f5b;
  color: #f9f9f9;
  padding-bottom: 30px;
  padding-top: 30px;
  font-size: 14px;
  font-weight: 300;

  a {
    text-decoration: none;
    color: #f9f9f9;
  }

  ul {
    list-style: none;
  }

  .content {
    width: 100%;
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    svg {
      margin-bottom: 30px;
    }
  }

  @media only screen and (min-width: 500px) {
    .content {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 720px) {
    .content {
      max-width: 600px;
    }
  }
`;

export default FooterStyles;

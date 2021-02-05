import React from "react";
import FooterStyles from "./footerStyles";
import { ReactComponent as LogoWhite } from "../../assets/icons/cinejump-white.svg";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="content">
        <LogoWhite />
        <ul>
          <li>Desenvolvido por Allan Yanik</li>
          <li>
            <a href="">Proposta do Projeto</a>
          </li>
          <li>
            <a href="https://www.figma.com/file/um4dcEJCOlEvB6kCe9KCOD/Cinejump?node-id=7185%3A17">
              Protótipo no Figma
            </a>
          </li>
          <li>Apresentação ao comitê</li>
          <li>
            <a href="https://github.com/itsyanik/cinejump-react">
              Documentação
            </a>
          </li>
        </ul>
      </div>
    </FooterStyles>
  );
};

export default Footer;

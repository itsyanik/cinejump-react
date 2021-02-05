import React from "react";
import HeaderStyles from "./headerStyles";
import { ReactComponent as LogoWhite } from "../../assets/icons/cinejump-white.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as UserCircle } from "../../assets/icons/user-circle.svg";

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <div className="left">
        <span>Filmes</span>
        <span>Séries</span>
      </div>
      <div className="center">
        <LogoWhite />
      </div>
      <div className="right">
        <Search />
        <UserCircle />
      </div>
    </HeaderStyles>
  );
};

export default Header;

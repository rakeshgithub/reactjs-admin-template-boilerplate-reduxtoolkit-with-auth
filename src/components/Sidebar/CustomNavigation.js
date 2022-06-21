import React from "react";
import * as S from "./style";

const CustomNavigation = (props) => {
  // const activeRoute = (routeName) => {
  //   return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // };
  return (
    <>
      <S.NavWrapper
        activeKey="/app"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <S.NavItem>
          <S.NavLink to="/app">Dashboard</S.NavLink>
        </S.NavItem>

        <S.NavItem>
          <S.NavLink to="/defaulters">Defaulters</S.NavLink>
        </S.NavItem>
      </S.NavWrapper>
    </>
  );
};

export default CustomNavigation;

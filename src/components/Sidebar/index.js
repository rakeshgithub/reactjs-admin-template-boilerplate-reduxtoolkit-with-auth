import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import * as S from "./style";

import CustomNavigation from "./CustomNavigation";

export const Sidebar = (props) => {
  const [open, setOpen] = useState(false);
  let sidebarClass = open ? "sidebarExpanded" : "sidebarCollapse";

  //let sidebarState = useSelector((state) => state.sidebar);
  //let dispatch = useDispatch();

  const handleToggle = (e) => {
    setOpen(!open);
  };

  const children = props.children;

  return (
    <S.Sidebar
      id="sidebarPanel"
      className={`${props.className} ${sidebarClass}`}
    >
      {children}
      <S.Navigationbar collapseOnSelect expand="lg" variant="dark">
        <S.NavbarToggle
          onClick={handleToggle}
          aria-controls="responsive-navbar"
        />

        <Navbar.Collapse in={open} id="responsive-navbar">
          <CustomNavigation />
        </Navbar.Collapse>
      </S.Navigationbar>
    </S.Sidebar>
  );
};

//import "react-bootstrap-drawer/lib/style.css";
import React, { useState } from "react";
import * as S from "./style";
import { Col, Row } from "react-bootstrap";
import { Sidebar } from "../../components/Sidebar";
import { Topnav } from "../../components/Topnav";

const HomeLayout = (props) => {
  const [openSidebar, setOpen] = useState(true);
  const { children } = props;
  const { heading } = props;
  const ColPadZero = {
    padding: 0,
  };

  const handleSidebarToggle = (e) => {
    setOpen(!openSidebar);
  };

  return (
    <S.HomeContainer fluid>
      <Row className="flex-xl-nowrap">
        <Col className="mx-0 px-0">
          <S.Topnav as={Topnav} />
        </Col>
      </Row>
      <Row className="flex-xl-nowrap">
        <S.LeftCol
          className={
            openSidebar === true
              ? "col-lg-2 col-md-4 col-xs-12 shadow-sm px-0 "
              : "col-lg-1 col-md-2 col-xs-12 px-0 w-5"
          }
        >
          <Sidebar>
            <S.LeftArrowCircle onClick={handleSidebarToggle} />
          </Sidebar>
        </S.LeftCol>
        <Col
          className={
            openSidebar === true
              ? "col-lg-10 col-md-8 col-xs-12"
              : "col-lg-11 col-md-10 col-xs-12"
          }
          style={ColPadZero}
        >
          <Row style={{ margin: 0 }}>
            <Col style={{ margin: 20 }}>
              <S.Heading>{heading}</S.Heading>
              {children}
            </Col>
          </Row>
        </Col>
      </Row>
    </S.HomeContainer>
  );
};

export default HomeLayout;

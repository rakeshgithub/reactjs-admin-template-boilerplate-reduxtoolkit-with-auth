import React from "react";
import { useDispatch } from "react-redux";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import * as S from "./style";
import logo from "../../assets/images/logo.png";
import { logout } from "../../store/slices/auth";

export const Topnav = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Container fluid className="p-0">
      <Row className="m-0 p-0">
        <Col className="p-0">
          <S.TopNavbar expand="lg" className="shadow-sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/app">
              <S.Logo src={logo} alt="logo" width="180" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link> */}
                <NavDropdown
                  title={user?.data?.name ? user.data.name : "Action"}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </S.TopNavbar>
        </Col>
      </Row>
    </Container>
  );
};

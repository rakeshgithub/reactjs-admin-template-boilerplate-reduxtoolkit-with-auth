import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "react-bootstrap-icons";

export const Sidebar = styled.div`
  position: relative;
  padding: 0 15px;
  background-color: #f4f5f7;
  color: rgb(66, 82, 110);
  @media ${breakpoints.sm} {
    height: 100vh;
    border-right-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const NavbarToggle = styled(Navbar.Toggle)`
  margin-right: 10px;
`;
export const NavWrapper = styled(Nav)`
  display: block;
  margin-top: 30px;
  width: 100%;
`;

export const NavItem = styled(Nav.Item)`
  display: block;
  width: 100%;
`;

export const NavLink = styled(Link)`
  display: block;

  color: #9d9f9e !important;
  text-decoration: none;
  padding: 10px;
  width: 100%;
  &:active {
    color: rgb(66, 82, 110) !important;
    background-color: rgb(235, 236, 240);
    border-radius: 5px;
  }
  &:hover {
    color: rgb(66, 82, 110) !important;
    background-color: rgb(235, 236, 240);
    border-radius: 5px;
  }
`;

export const Navigationbar = styled(Navbar)`
  padding: 10px;
  display: block;
`;

export const LeftArrowCircle = styled(ArrowLeftCircle)`
  position: absolute;
  top: 20px;
  right: -9px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  &:hover {
    color: #0d6efd;
  }
`;

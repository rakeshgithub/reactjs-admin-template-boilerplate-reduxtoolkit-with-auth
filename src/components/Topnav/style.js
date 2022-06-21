import { Navbar, Image } from "react-bootstrap";
import styled from "styled-components";

export const TopNavbar = styled(Navbar)`
  background-color: #ffffff;
  color: #000000;
  & .navbar-brand {
    color: #ffffff;
  }
  & .navbar-nav {
    flex-direction: row;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 0 !important;
  }

  & .navbar-nav .nav-link {
    color: #000000;
    float: right important;
  }
`;

export const Logo = styled(Image)`
  border-radius: 5px;
  margin-left: 10px;
`;

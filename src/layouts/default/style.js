import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { ArrowLeftCircle } from "react-bootstrap-icons";
// import breakpoints from 'styles/breakpoints';

// /*background-color: ${(props) => props.theme.primary};*/
export const HomeContainer = styled(Container)`
  height: 100vh;
`;

export const LeftCol = styled(Col)`
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 1s ease-in-out;
`;

export const RightCol = styled(Col)``;

export const Topnav = styled(Col)`
  background-color: #112557;
  padding: 0 !important;
`;

export const Heading = styled.h1`
  font-size: 1.4rem;
  margin: 15px 0;
  font-weight: bold;
`;

export const LeftArrowCircle = styled(ArrowLeftCircle)`
  position: absolute;
  top: 20px;
  right: -9px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: #e4e4e4;
  &:hover {
    color: #0d6efd;
  }
`;

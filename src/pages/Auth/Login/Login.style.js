import styled from "styled-components";
import { Card, Container, Image } from "react-bootstrap";

export const WelcomeContainer = styled(Container)`
  height: 100vh;
  background-color: #e4e4e4;
  .row {
    height: 100%;
    justify-content: center;
    [class^="col-"] {
      align-self: center;
    }
  }
`;

export const WelcomeCard = styled(Card)`
  text-align: center;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.3);
  h1 {
    margin-bottom: 30px;
    font-size: 2rem;
    font-weight: bold;
  }
  h2 {
    margin: 20px auto;
    font-size: 1.5rem;
    font-weight: bold;
  }
  p {
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 0.8rem;
  }
`;

export const userIcon = styled(Image)`
  width: 5rem;
  height: 5rem;
  margin: auto;
`;

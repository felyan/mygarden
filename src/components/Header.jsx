import React from 'react';
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
      <Container>
        <a href="#home">My<Span>Garden</Span></a>
        <CostumMenu />
    </Container>
  )
}

export default Header

const Container = styled.div`
background: rgb(250 240 0 / 60%);
    min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Span = styled.p`
    color: yellowgreen;
    display: inline;
`

const CostumMenu = styled(MenuIcon)`
  cursor: pointer;
`;
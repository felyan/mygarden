import React from 'react';
import styled from "styled-components";

const Home = () => {
  return (
      <Wrap>
          <ItemText>
              <h1>Welcome to my<Span>Garden</Span></h1>
              <p>Aenean sed adipiscing diam donec adipiscing</p>
        </ItemText>
    </Wrap>
  )
}

export default Home

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://cdn.pixabay.com/photo/2018/09/03/23/28/wooden-door-3652660_960_720.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 30vh;
  text-align: center;
  color: white;

`;


const Span = styled.p`
    color: yellowgreen;
    display: inline;
`
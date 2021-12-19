import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/assets/images/viewers-disney.png" alt="disney" />
      </Wrap>
      <Wrap>
        <img src="/assets/images/viewers-marvel.png" alt="marvel" />
      </Wrap>
      <Wrap>
        <img src="/assets/images/viewers-national.png" alt="national" />
      </Wrap>
      <Wrap>
        <img src="/assets/images/viewers-pixar.png" alt="pixar" />
      </Wrap>
      <Wrap>
        <img src="/assets/images/viewers-starwars.png" alt="starwars" />
      </Wrap>
    </Container>

  )
}

export default Viewers

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px;
  padding: 30px 0px 26px;
  `
const Wrap = styled.div`
  border: solid 3px rgba(249, 249, 249, .1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: 250ms;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 /73%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, .8);

  }

`
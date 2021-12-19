import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://i.pinimg.com/originals/9f/61/10/9f6110e35f500e45c085e9414f11b2b7.jpg" alt="Mulan" />
      </Background>
      <ImageTitle>
        <img src="./assets/images/mulanlogo.png" alt="MulanLogo" />
      </ImageTitle>

    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  // background: red;

`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: .7;

  img {
    width: 100%;
    heigh: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  position: relative;
  min-height: 170px;
  min-width: 200px;
  height: 30vh;
  width: 35vw;

  img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
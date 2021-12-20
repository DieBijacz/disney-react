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
      <Controls>
        <PlayButton>
          <img src="./assets/images/play-icon-black.png" alt="play" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="./assets/images/play-icon-white.png" alt="play-trailer" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="./assets/images/group-icon.png" alt="group" />
        </GroupWatchButton>
      </Controls>
      <SubTitles>
        <span>1998 Family, Fantasy, Kids, Animation</span>
      </SubTitles>
      <Description>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas mollitia earum perferendis quod tenetur? Accusamus deserunt aspernatur error rerum.
        </span>
      </Description>
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

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  padding: 0 24px;
  background: rgb(249, 249, 249);
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: solid 1px rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, .6);
  color: white;
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0, .9);
`

const SubTitles = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled(SubTitles)`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
`
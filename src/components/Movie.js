import React from 'react'
import styled from 'styled-components'

function Movie({ data }) {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  const clear = []
  data.map(movie => {
    if (movie.backdrop_path != null) {
      clear.push(movie)
    }
  })
  return (
    <>
      <Wrap>
        <img src={IMGPATH + clear[0].backdrop_path} alt={clear.title} />
      </Wrap>
      <Wrap>
        <img src={IMGPATH + clear[1].backdrop_path} alt={clear.title} />
      </Wrap>
      <Wrap>
        <img src={IMGPATH + clear[2].backdrop_path} alt={clear.title} />
      </Wrap>
      <Wrap>
        <img src={IMGPATH + clear[3].backdrop_path} alt={clear.title} />
      </Wrap>
    </>

  )
}
export default Movie

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, .1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: 250ms;
  cursor: pointer;

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

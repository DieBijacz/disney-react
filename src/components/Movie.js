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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;


  }

`

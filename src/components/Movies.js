import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Movie from "./Movie";

function Movies() {
  const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${Math.floor(Math.random() * 200) + 1}`

  const [movies, setMovies] = useState([])

  const getMovies = async (API) => {
    const resp = await fetch(API)
    const data = await resp.json()
    setMovies(data.results)
  }

  useEffect(() => {
    getMovies(API)
  }, [])

  return (
    <Container>
      <h3>Recommended for You</h3>
      <Content>
        {(movies.length > 0) ?
          <Movie data={movies} /> : console.log('fetching movies')}
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`


`
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

`

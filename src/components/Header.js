import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Navbar>
      <Logo src='./assets/images/logo.svg' />
      <NavMenu>
        <a>
          <img src="/assets/images/home-icon.svg" alt='home' />
          <span>HOME</span>
        </a>
        <a>
          <img src="/assets/images/search-icon.svg" alt='search' />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/assets/images/watchlist-icon.svg" alt='watchlist' />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/assets/images/original-icon.svg" alt='original' />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/assets/images/movie-icon.svg" alt='movie' />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/assets/images/series-icon.svg" alt='series' />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='/assets/images/profi.jpg' alt='profil' />
    </Navbar>
  )
}

export default Header

const Navbar = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
display: flex;
align-items: center;
flex: 1;
margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    cursor: pointer;

    img {
      height: 20px;
    }
    
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
    
      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0)
      }
    }
    
    &:hover {
      span:after {
        transition: 250ms;
        transform: scaleX(1);
        opacity: 1;
      }
    }


  }
`
const UserImg = styled.img`
 width: 48px;
 height: 48px;
 border-radius: 50%;
 cursor: pointer;
`
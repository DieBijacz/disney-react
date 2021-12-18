import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Navbar>
      <Logo src='./assets/images/logo.svg' />
      <NavMenu>
        <a>
          <img src="/assets/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/assets/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/assets/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/assets/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/assets/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/assets/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='/assets/images/profi.jpg' />
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
        transition: .3s;
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
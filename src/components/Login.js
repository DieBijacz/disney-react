import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='./assets/images/cta-logo-one.svg' />
        <SignUp>
          <span>GET ALL THERE</span>
        </SignUp>
        <Description>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam est quas illo error voluptate obcaecati vitae, similique corrupti ut.
          </span>
        </Description>
        <CTALogoTwo src='./assets/images/cta-logo-two.png' />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: start;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(./assets/images/login-background.jpg);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.7;
  }
`

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px;
  color: rgb(249, 249, 249);
  border-radius: 4px;
  cursor: pointer;
  transition: 250ms;
  letter-spacing: 1.5px;
  margin: 8px 0 12px;

  &:hover {
    background: #0483ee;
  }
`

const Description = styled.div`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  margin: 10px 0;
`

const CTALogoTwo = styled.img`
  width: 90%;
`
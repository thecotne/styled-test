import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

export default function App () {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppParagraph>
          Edit <AppCode>src/App.js</AppCode> and save to reload.
        </AppParagraph>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`

const AppParagraph = styled.p``

const AppCode = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;

  ${AppParagraph}:hover & {
    color: #61dafb;
  }
`

const AppLink = styled.a`
  color: #61dafb;
`

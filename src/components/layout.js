import React from "react"
import { createGlobalStyle } from "styled-components"
import Footer from "./footer/Footer"
import Header from "./header/Header"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout

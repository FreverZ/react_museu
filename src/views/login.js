import React from 'react'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import SignIn from '../components/sign-in'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Travel Agency1</title>
        <meta property="og:title" content="Login - Travel Agency1" />
      </Helmet>
      <nav data-role="Header" className="login-navbar">
        <h1 className="login-logo">Museus de Portugal</h1>
        <div className="login-container1">
          <div className="login-right-side">
            <div className="login-links-container">
              <span className="login-text"><a href="/home" className="landing-page-link">Home</a></span>
              <span className="login-text1"><a href="/not-found" className="landing-page-link">Sobre nós</a></span>
              <span className="login-text2"><a href="/not-found" className="landing-page-link">Contactos</a></span>
            </div>
          </div>
        </div>
      </nav>
      <SignIn></SignIn>
    </div>
  )
}

export default Login
